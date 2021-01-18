import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import GameHeader from './game-header.jsx';

const mockStore = configureStore([]);


it(`GameHeader is rendered correctly`, () => {
  const store = mockStore({
    mistakes: 3,
  });

  const tree = renderer.create(
      <Provider store={store}>
        <GameHeader
          mistakes={3}
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
