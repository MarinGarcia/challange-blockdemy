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
  name: String
  air_date: String
  episode: String
  characters: [Character]
  createdAt: String
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
    createdAt: String
  }

  type customCharacterResult {
    info: PageInfo
    results: [Character]
  }

  type customEpisodesResult {
    info: PageInfo
    results: [Episode]
  }

  type PageInfo {
    next: Int
    pages: Int
    count: Int
    prev: Int
  }

  type Query {
    characters(page: Int): customCharacterResult
    character(id: ID!): Character
    episodes(page: Int): customEpisodesResult
    episode(id: ID): Episode
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
