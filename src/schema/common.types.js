const { gql } = require('apollo-server-express');
const commonDefs = gql`
  type PageInfo {
    next: Int
    pages: Int
    count: Int
    prev: Int
  }
`
module.exports = commonDefs;
