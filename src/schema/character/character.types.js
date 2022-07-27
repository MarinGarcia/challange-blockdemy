const { gql } = require('apollo-server-express');

const characterDefs = gql`
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

  type Query {
    characters(page: Int): customCharacterResult
    character(id: ID!): Character
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

module.exports = characterDefs;