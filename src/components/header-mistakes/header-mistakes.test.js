import React from "react";
import renderer from "react-test-renderer";
import HeaderMistakes from "./header-mistakes.jsx";


describe(`Should HeaderMistakes render correctly`, () => {
  it(`With one zero count`, () => {
    const tree = renderer.create(
        <HeaderMistakes
          count={0}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With one one count`, () => {
    const tree = renderer.create(
        <HeaderMistakes
          count={1}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
