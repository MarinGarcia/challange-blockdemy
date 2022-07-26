const {gql } = require('apollo-server-express');
const typeDefs = gql`
type Location {
  id: ID
  name: String
  type: String
  dimension: String
  residents: [Character]
}

type Episode {
  id: ID
  air_date: String
  episode: String
  characters: [Character]
}

type Character {
    id: ID
    name: String
    status: String
    species: String
    type: String
    gender: String
    image: String
    origin: Location
    location: Location
    episode: [Episode]
  }

  type Query {
    characters: [Character]
  }

  type Mutation {
    createCharacter(
      name: String, 
      status: String,
      species: String,
      type: String,
      gender: String,
      image: String
    ): Character
  }
`
module.exports = { typeDefs };
