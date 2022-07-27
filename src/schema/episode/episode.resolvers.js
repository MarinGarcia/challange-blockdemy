const Character = require("../../models/Character");
const Episode = require("../../models/Episode");
const options = require("../../../config/paginate.options");
const formatResult = require("../../../config/response.options");

const episodeResolvers = {
  Query: {
    episodes: async (_, { page }) => {
      options.page = page;
      const episodes = await Episode.paginate({}, options);
      return formatResult(episodes);
    },
    episode: async (_, { id }) => {
      const episode = await Episode.findById(id);
      return episode;
    },
  },
  Episode: {
    characters: async (episode) => {
      return (await episode.populate({ path: "characters", model: Character }))
        .characters;
    },
    createdAt: async (episode) => {
      return new Date(episode.createdAt).toISOString();
    },
  },
};

module.exports = episodeResolvers;
