import { Book } from '@src/data/types/Book'
import GqlBook from '@src/graphql/schema/typedefs/GqlBook'
import { GraphQLList } from 'graphql'

const books: Book[] = [
  {
    id: 1,
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    id: 2,
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
]

const getAllBooksQuery = {
  type: new GraphQLList(GqlBook),
  resolve: (): Book[] => {
    return books
  },
}

export default getAllBooksQuery
