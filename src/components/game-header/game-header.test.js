import React from 'react';
import renderer from 'react-test-renderer';
import GameHeader from './game-header.jsx';


it(`GameHeader is rendered correctly`, () => {
  const tree = renderer.create(
      <GameHeader />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
