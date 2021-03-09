const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
} = require('graphql');
const _ = require('lodash');

let books = [
  {
    name: 'Name of Wind',
    genre: 'Fantasy',
    id: '1',
  },
  {
    name: 'The Final Empire',
    genre: 'Fantasy',
    id: '2',
  },
  {
    name: 'The Long Earth',
    genre: 'Sci-Fi',
    id: '3',
  },
];

//defining the object types for the schemas

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    genre: {
      type: GraphQLString,
    },
  }),
});

//defining a root query for the graphql schema

/* For example, when we will start a query with book, then this will go to the RootQuery and find the schema with the query related to the book query in the field */

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //code to get data from db / other source
        return _.find(books, { id: args.id });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
