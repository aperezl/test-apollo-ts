import { ApolloServer } from 'apollo-server'
import schema from './graphql/schema/schema'

const server = new ApolloServer({ schema })

server
  .listen()
  .then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
  })
  .catch((err) => {
    console.log(err)
  })
