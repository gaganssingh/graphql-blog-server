const { ApolloServer } = require("apollo-server");
const gql = require("graphql-tag");

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

server
  .listen({ port: 5000 })
  .then((res) => console.log(`Server running at ${res.url}`));
