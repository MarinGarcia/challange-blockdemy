const { gql } = require('apollo-server-express');

const episodeDefs = gql`
  type Episode {
    id: ID
    name: String
    air_date: String
    episode: String
    characters: [Character]
    createdAt: String
  }

  type customEpisodesResult {
    info: PageInfo
    results: [Episode]
  }

  type Query {
    episodes(page: Int): customEpisodesResult
    episode(id: ID): Episode
  }
`

module.exports = episodeDefs;