const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();
const port = 4000;

const schema = buildSchema(`
    type Query {
        name: String,
        age: Int,
        random: Float,
        friends: [String]
    }
`);
const root = {
  name: () => 'Ken Mugy',
  age: () => 31,
  random: () => Math.floor(Math.random() * 6) + 1,
  friends: () => ['adrian', 'ariana', 'grande'],
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
