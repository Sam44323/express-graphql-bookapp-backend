const { GraphQLObjectType, GraphQLString } = require('graphql');

//defining the object types for the schemas

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    genre: {
      type: GraphQLString,
    },
  }),
});
