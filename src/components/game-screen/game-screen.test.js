import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import GameScreen from "./game-screen.jsx";
import {GameType} from "../../const.js";

const mockStore = configureStore([]);

const children = <div className="children-component" />;


describe(`GameScreen component render correctly`, () => {

  it(`with type GameType.ARTIST`, () => {
    const store = mockStore({
      mistakes: 0,
    });

    const tree = renderer.create(
        <Provider store={store}>
          <GameScreen
            type={GameType.ARTIST}
          >
            {children}
          </GameScreen>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`with type GameType.GENRE`, () => {
    const store = mockStore({
      mistakes: 0,
    });

    const tree = renderer.create(
        <Provider store={store}>
          <GameScreen
            type={GameType.GENRE}
          >
            {children}
          </GameScreen>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
