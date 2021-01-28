import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";

import {GameType} from "../../const.js";

import {ActionCreator} from "../../reducer/game/game.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {getStep, getMistakes, getMaxMistakes} from "../../reducer/game/selectors.js";
import {getQuestions} from "../../reducer/data/selectors.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";

import AuthScreen from "../auth-screen/auth-screen.jsx";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import GameScreen from "../game-screen/game-screen.jsx";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen";
import GameOverScreen from "../game-over-screen/game-over-screen.jsx";
import WinScreen from "../win-screen/win-screen.jsx";

import withActivePlayer from "../../hocs/with-active-player/with-active-player.js";
import withUserAnswer from "../../hocs/with-user-answer/with-user-answer.js";

const GenreQuestionScreenWrapped = withActivePlayer(withUserAnswer(GenreQuestionScreen));
const ArtistQuestionScreenWrapped = withActivePlayer(ArtistQuestionScreen);


class App extends PureComponent {
  _renderGameScreen() {
    const {
      login,
      authorizationStatus,
      maxMistakes,
      mistakes,
      questions,
      onUserAnswer,
      resetGame,
      onWelcomeButtonClick,
      step
    } = this.props;
    const question = questions[step];

    if (step === -1) {
      return (
        <WelcomeScreen
          errorsCount={maxMistakes}
          onWelcomeButtonClick={onWelcomeButtonClick}
        />
      );
    }

    if (mistakes >= maxMistakes) {
      return (
        <GameOverScreen
          onReplayButtonClick={resetGame}
        />
      );
    }

    if (step >= questions.length) {
      if (authorizationStatus === AuthorizationStatus.AUTH) {
        return (
          <WinScreen
            questionsCount={questions.length}
            mistakesCount={mistakes}
            onReplayButtonClick={resetGame}
          />
        );
      } else if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
        return (
          <AuthScreen
            onReplayButtonClick={resetGame}
            onSubmit={login}
          />
        );
      }

      return null;
    }

    if (question) {
      switch (question.type) {
        case GameType.ARTIST:
          return (
            <GameScreen type={question.type}>
              <ArtistQuestionScreenWrapped
                question={question}
                onAnswer={onUserAnswer}
              />
            </GameScreen>
          );
        case GameType.GENRE:
          return (
            <GameScreen type={question.type}>
              <GenreQuestionScreenWrapped
                question={question}
                onAnswer={onUserAnswer}
              />
            </GameScreen>
          );
      }
    }

    return null;
  }

  render() {
    const {questions, login, resetGame} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderGameScreen()}
          </Route>
          <Route exact path="/artist">
            <GameScreen type={GameType.ARTIST}>
              <ArtistQuestionScreenWrapped
                question={questions[1]}
                onAnswer={() => { }}
              />
            </GameScreen>
          </Route>
          <Route exact path="/genre">
            <GameScreen type={GameType.GENRE}>
              <GenreQuestionScreenWrapped
                question={questions[0]}
                onAnswer={() => { }}
              />
            </GameScreen>
          </Route>
          <Route exact path="/dev-auth">
            <AuthScreen
              onReplayButtonClick={resetGame}
              onSubmit={login}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  login: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  maxMistakes: PropTypes.number.isRequired,
  mistakes: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
  onWelcomeButtonClick: PropTypes.func.isRequired,
  resetGame: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  step: getStep(state),
  mistakes: getMistakes(state),
  maxMistakes: getMaxMistakes(state),
  questions: getQuestions(state),
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
  onWelcomeButtonClick() {
    dispatch(ActionCreator.incrementStep());
  },
  onUserAnswer(question, answer) {
    dispatch(ActionCreator.incrementMistake(question, answer));
    dispatch(ActionCreator.incrementStep());
  },
  resetGame() {
    dispatch(ActionCreator.resetGame());
  },
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
