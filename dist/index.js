'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const apollo_server_1 = require('apollo-server')
const dotenv_1 = __importDefault(require('dotenv'))
const schema_1 = __importDefault(require('./graphql/schema/schema'))
const codegen_1 = require('./codegen')
const client_1 = __importDefault(require('./prisma/client'))
dotenv_1.default.config()
const startSever = () => {
  ;(0, codegen_1.performAstCodege)()
  const context = {
    prisma: client_1.default,
  }
  const server = new apollo_server_1.ApolloServer({
    schema: schema_1.default,
    context,
  })
  server
    .listen()
    .then(({ url }) => {
      console.log(`🚀  Server ready at ${url}`)
    })
    .catch((err) => {
      console.log(err)
    })
}
startSever()
//# sourceMappingURL=index.js.map
