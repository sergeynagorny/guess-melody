import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getMistakes} from "../../reducer/game/selectors.js";
import HeaderMistakes from "../header-mistakes/header-mistakes";


const GameHeader = (props) => {
  const {mistakes} = props;

  return (
    <header className="game__header">
      <a className="game__back" href="#">
        <span className="visually-hidden">Сыграть ещё раз</span>
        <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
      </a>

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
};

const mapStateToProps = (state) => ({
  mistakes: getMistakes(state),
});

export {GameHeader};
export default connect(mapStateToProps)(GameHeader);
