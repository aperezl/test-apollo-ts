import { Book } from '@prisma/client'
import { GraphQLList } from 'graphql'
import GqlBook from '../../typedefs/GqlBook'
import { getAllBooks } from '../../../../data/bookService'
import { IApolloServerContext } from 'src/interfaces/IApolloServerContext'

const getAllBooksQuery = {
  type: GraphQLList(GqlBook),
  // eslint-disable @typescript-eslint/no-unused-vars
  revolve: async (
    _source: unknown,
    _args: unknown,
    _context: IApolloServerContext,
    _info: unknown,
  ): Promise<Book[]> => {
    return getAllBooks()
  },
}

export default getAllBooksQuery
