const { makeExecutableSchema } = require('graphql-tools')
const merge = require('lodash/merge');
const commonDefs = require("./common.types");

const characterSchema = require("./character");
const episodeSchema = require("./episode");
const locationSchema = require("./location");

const schema = makeExecutableSchema({
    typeDefs: [
      characterSchema.typeDefs,
      episodeSchema.typeDefs,
      locationSchema.typeDefs,
      commonDefs
    ],
    resolvers: merge(
      characterSchema.resolvers,
      episodeSchema.resolvers,
      locationSchema.resolvers
    )
})

module.exports = schema
