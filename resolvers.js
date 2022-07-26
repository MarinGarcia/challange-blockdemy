const Character = require('./models/Character');
const Location = require('./models/Location');
const Episode = require('./models/Episode');

const resolvers = {
  Query: {
    characters: async () => {
      const characters = await Character.find();
      return characters;
    }
  },
  Character: {
    origin: async (character) => {
      return (await character.populate({ path: 'origin', model: Location})).origin;
    },
    location: async (character) => {
      return (await character.populate({ path: 'location', model: Location})).location;
    },
    episode: async (character) => {
      return (await character.populate({ path: 'episode', model: Episode})).episode;
    }
  },
  Mutation: {
    createCharacter: async (_, args) => {
      const { name, status, species, type, gender, image } = args;
      const newCharacter = new Character({
        name,
        status,
        species,
        type,
        gender,
        image
      })
      await newCharacter.save();
      return newCharacter;
    }
  }
};

module.exports = { resolvers };
