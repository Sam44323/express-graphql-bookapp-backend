const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const app = express();

// app.use('/graphql', graphqlHTTP());

app.get('/', (req, res) => res.json('This is working!'));

app.listen(5000, () => {
  console.log('Server is listening!');
});
