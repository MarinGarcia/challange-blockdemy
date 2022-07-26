const Character = require("./models/Character");
const Location = require("./models/Location");
const Episode = require("./models/Episode");
const options = {
  page: 0,
  limit: 20,
  customLabels: {
    nextPage: "next",
    prevPage: "prev",
    totalPages: "pages",
    totalDocs: "count",
  },
};

const resolvers = {
  Query: {
    characters: async (_, { page }) => {
      options.page = page;
      const characters = await Character.paginate({}, options);
      return {
        info: {
          next: characters.next,
          pages: characters.pages,
          count: characters.count,
          prev: characters.prev
        },
        results: characters.docs
      };
    },
    character: async (_, { id }) => {
      const character = await Character.findById(id);
      return character;
    }
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
        image,
      });
      await newCharacter.save();
      return newCharacter;
    },
  },
};

module.exports = { resolvers };
