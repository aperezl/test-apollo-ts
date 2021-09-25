'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const graphql_1 = require('graphql')
const GqlBook_1 = __importDefault(require('../../typedefs/GqlBook'))
const bookService_1 = require('../../../../data/bookService')
const getAllBooksQuery = {
  type: (0, graphql_1.GraphQLList)(GqlBook_1.default),
  revolve: async () => {
    return (0, bookService_1.getAllBooks)()
  },
}
exports.default = getAllBooksQuery
//# sourceMappingURL=getAllBooksQuery.js.map
