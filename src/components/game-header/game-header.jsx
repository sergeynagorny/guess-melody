import React from "react";
// import PropTypes from "prop-types";

const GameHeader = () => {
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

      <div className="game__mistakes">
        <div className="wrong"></div>
        <div className="wrong"></div>
        <div className="wrong"></div>
      </div>
    </header>
  );
};

GameHeader.propTypes = {
};


export default GameHeader;
