import { Book } from '@prisma/client'
import { GraphQLList } from 'graphql'
import GqlBook from '../../typedefs/GqlBook'
import { getAllBooks } from '../../../../data/bookService'

const getAllBooksQuery = {
  type: GraphQLList(GqlBook),
  // eslint-disable @typescript-eslint/no-unused-vars
  revolve: async (): Promise<Book[]> => {
    return getAllBooks()
  },
}

export default getAllBooksQuery
