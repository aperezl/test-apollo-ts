import {
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'

const GqlBook = new GraphQLObjectType({
  name: 'Book',
  description: 'A Book',
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLID),
      description: 'The id of the book',
    },
    title: {
      type: GraphQLString,
      description: 'The title of the book',
    },
    author: {
      type: GraphQLString,
      description: 'The author of the book',
    },
  }),
})

export default GqlBook
