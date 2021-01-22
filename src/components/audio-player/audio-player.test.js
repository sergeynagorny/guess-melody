import React from 'react';
import renderer from 'react-test-renderer';
import AudioPlayer from './audio-player.jsx';

const mock = {
  song: {
    src: `song.mp3`
  }
};

it(`AudioPlayer is rendered correctly`, () => {
  const {song} = mock;

  const tree = renderer.create((
    <AudioPlayer
      isLoading={true}
      isPlaying={false}
      src={song.src}
      onPlayButtonClick={() => {}}
    >
      <audio />
    </AudioPlayer>
  ), {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
