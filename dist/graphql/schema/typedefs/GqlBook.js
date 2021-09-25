'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const graphql_1 = require('graphql')
const GqlBook = new graphql_1.GraphQLObjectType({
  name: 'Book',
  description: 'A Book',
  fields: () => ({
    id: {
      type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLID),
      description: 'The id of the book',
    },
    title: {
      type: graphql_1.GraphQLString,
      description: 'The title of the book',
    },
    author: {
      type: graphql_1.GraphQLString,
      description: 'The author of the book',
    },
  }),
})
exports.default = GqlBook
//# sourceMappingURL=GqlBook.js.map
