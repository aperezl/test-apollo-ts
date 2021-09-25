'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const graphql_1 = require('graphql')
const getAllBooksQuery_1 = __importDefault(require('./getAllBooksQuery'))
const query = new graphql_1.GraphQLObjectType({
  name: 'Query',
  fields: {
    books: getAllBooksQuery_1.default,
  },
})
exports.default = query
//# sourceMappingURL=query.js.map
