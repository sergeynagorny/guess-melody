const AVATAR_URL = `https://randomuser.me/api/portraits/men`;

const getRandomAvatar = () => {
  return `${AVATAR_URL}/${Math.floor(Math.random() * (100 - 1)) + 1}.jpg`;
};

export default [
  {
    type: `genre`,
    genre: `rock`,
    answers: [{
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `blues`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `jazz`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
    }],
  }, {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    answers: [{
      picture: getRandomAvatar(),
      artist: `John Snow`,
    }, {
      picture: getRandomAvatar(),
      artist: `Jack Daniels`,
    }, {
      picture: getRandomAvatar(),
      artist: `Jim Beam`,
    }],
  }
];
