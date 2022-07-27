const Character = require("../../models/Character");
const Location = require("../../models/Location");
const options = require("../../../config/paginate.options");
const formatResult = require("../../../config/response.options");

const locationResolvers = {
  Query: {
    locations: async (_, { page }) => {
      options.page = page;
      const locations = await Location.paginate({}, options);
      return formatResult(locations);
    },
    location: async (_, { id }) => {
      const location = await Location.findById(id);
      return location;
    },
  },
  Location: {
    residents: async (location) => {
      return (await location.populate({ path: "residents", model: Character }))
        .residents;
    },
    createdAt: async (location) => {
      return new Date(location.createdAt).toISOString();
    },
  },
};

module.exports = locationResolvers;
