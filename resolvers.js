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

const formatResult = (model) => {
  return {
    info: {
      next: model.next,
      pages: model.pages,
      count: model.count,
      prev: model.prev,
    },
    results: model.docs,
  };
};

const resolvers = {
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
    episodes: async (_, { page }) => {
      options.page = page;
      const episodes = await Episode.paginate({}, options);
      return formatResult(episodes);
    },
    episode: async (_, { id }) => {
      const episode = await Episode.findById(id);
      return episode;
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
      return  new Date(character.createdAt).toISOString();
    }
  },
  Episode: {
    characters: async (episode) => {
      return (await episode.populate({ path: "characters", model: Character }))
        .characters;
    },
    createdAt: async (episode) => {
      return new Date(episode.createdAt).toISOString();
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
