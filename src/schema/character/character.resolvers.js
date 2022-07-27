const Character = require("../../models/Character");
const Location = require("../../models/Location");
const Episode = require("../../models/Episode");
const options = require("../../../config/paginate.options");
const formatResult = require("../../../config/response.options");

const characterResolvers = {
  Query: {
    characters: async (_, { page }) => {
      options.page = page;
      const characters = await Character.paginate({}, options);
      return formatResult(characters);
    },
    character: async (_, { id }) => {
      const character = await Character.findById(id);
      return character;
    },
  },
  Character: {
    origin: async (character) => {
      return (await character.populate({ path: "origin", model: Location }))
        .origin;
    },
    location: async (character) => {
      return (await character.populate({ path: "location", model: Location }))
        .location;
    },
    episode: async (character) => {
      return (await character.populate({ path: "episode", model: Episode }))
        .episode;
    },
    createdAt: async (character) => {
      return new Date(character.createdAt).toISOString();
    },
  },
};

module.exports = characterResolvers;
