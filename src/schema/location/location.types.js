const { gql } = require('apollo-server-express');

const locationDefs = gql`
  type Location {
    id: ID
    name: String
    type: String
    dimension: String
    residents: [Character]
    createdAt: String
  }

  type customLocationsResult {
    info: PageInfo
    results: [Location]
  }

  type Query {
    locations(page: Int): customLocationsResult
    location(id: ID): Location
  }
`

module.exports = locationDefs;
