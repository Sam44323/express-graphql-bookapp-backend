const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const bookSchema = require("./schema/schema");
const mongoose = require("mongoose");
const { MONGO_URI } = require("./constants");
const cors = require("cors");

const app = express();
app.use(cors());

//middleware for routing to the graphql schemas
app.use(
  "/graphql",
  graphqlHTTP({
    schema: bookSchema,
    graphiql: true,
  })
);

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Connected to the database!");
    app.listen(5000, () => {
      console.log("Server is listening!");
    });
  })
  .catch((err) => {
    console.log(err);
  });
