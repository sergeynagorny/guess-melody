import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {GameType} from "../../const.js";
import GameHeader from "../game-header/game-header";


class ArtistQuestionScreen extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {onAnswer, question} = this.props;
    const {answers, song} = question;

    return (
      <section className="game game--genre">
        <GameHeader />

        <section className="game__screen">

          <section className="game__screen">
            <h2 className="game__title">Кто исполняет эту песню?</h2>
            <div className="game__track">
              <div className="track">
                <button className="track__button track__button--play" type="button" />
                <div className="track__status">
                  <audio src={song.src} />
                </div>
              </div>
            </div>
          </section>

          <form className="game__artist">
            {answers.map((answer, i) => {
              return (
                <div key={answer.artist} className="artist">
                  <input className="artist__input visually-hidden" type="radio" name="answer"
                    defaultValue={`answer-${i}`}
                    id={`answer-${i}`}
                    onChange={(evt) => {
                      evt.preventDefault();
                      onAnswer(question, answer);
                    }}
                  />
                  <label className="artist__name" htmlFor={`answer-${i}`}>
                    <img className="artist__picture" src={answer.picture} alt={answer.artist} />
                    {answer.artist}
                  </label>
                </div>
              );
            })}
          </form>

        </section>
      </section>
    );
  }
}

ArtistQuestionScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
      artist: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    })).isRequired,
    song: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ArtistQuestionScreen;
