require("dotenv").config();
const { ApolloServer, gql } = require("apollo-server");
const mongoose = require("mongoose");

const Post = require("./models/Post");
const User = require("./models/User");

const typeDefs = gql`
  type Query {
    test: String!
  }
`;

const resolvers = {
  Query: {
    test: () => "Hello from GraphQL Land!",
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .then(() => server.listen({ port: 5000 }))
  .then((res) => console.log(`Server running at ${res.url}`));
