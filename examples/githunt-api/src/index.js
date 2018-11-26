// @ts-check
const { ApolloServer } = require("apollo-server");
const path = require("path");
const { makeSchema } = require("graphqliteral");
const types = require("./schema");

const schema = makeSchema({
  types,
  outputs: {
    schema: path.join(__dirname, "../githunt-api-schema.graphql"),
    typegen: path.join(__dirname, "../githuntTypes.ts"),
  },
});

const server = new ApolloServer({
  schema,
});

const port = 4000;

server.listen({ port }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  )
);
