import { ApolloServer } from 'apollo-server'
import dotenv from 'dotenv'
import schema from './graphql/schema/schema'
import { performAstCodege } from './codegen'
import prisma from './prisma/client'
import { IApolloServerContext } from './interfaces/IApolloServerContext'

dotenv.config()

const startSever = () => {
  performAstCodege()

  const context: IApolloServerContext = {
    prisma,
  }

  const server = new ApolloServer({ schema, context })

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
