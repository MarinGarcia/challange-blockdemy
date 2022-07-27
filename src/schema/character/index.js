const characterResolvers = require("./character.resolvers");
const characterDefs = require("./character.types");

module.exports = {
  resolvers: characterResolvers,
  typeDefs: characterDefs
}
