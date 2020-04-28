const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();
const port = 4000;

const schema = buildSchema(`
    type Query {
        name: String,
        age: Int
    }
`);
const root = {
  name: () => 'Ken Mugy',
  age: () => 31,
};

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(port, () =>
  console.log(`listening on address http://localhost:${port}/graphql`)
);
