import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getMistakes} from "../../reducer/game/selectors.js";
import HeaderMistakes from "../header-mistakes/header-mistakes";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const.js";
import {ActionCreator} from "../../reducer/game/game.js";


const GameHeader = (props) => {
  const {mistakes, goToWelcome} = props;

  return (
    <header className="game__header">
      <Link to={AppRoute.ROOT}
        className="game__back"
        onClick={goToWelcome}
      >
        <span className="visually-hidden">Сыграть ещё раз</span>
        <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
      </Link>

      <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
        <circle className="timer__line" cx={390} cy={390} r={370}
          style={{
            transform: `rotate(-90deg) scaleY(-1)`,
            transformOrigin: `center`,
            filter: `url('#blur')`,
          }}
        />
      </svg>
      <HeaderMistakes count={mistakes} />
    </header>
  );
};

GameHeader.propTypes = {
  mistakes: PropTypes.number.isRequired,
  goToWelcome: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  mistakes: getMistakes(state),
});

const mapDispatchToProps = (dispatch) => ({
  goToWelcome() {
    dispatch(ActionCreator.goToWelcome());
  },
});


export {GameHeader};

export default connect(mapStateToProps, mapDispatchToProps)(GameHeader);
