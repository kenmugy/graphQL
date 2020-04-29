const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();
const port = 4000;

const fakeData = {
  '1': {
    id: '1',
    name: 'alex jones',
    age: Math.trunc(Math.random() * 50) + 1,
    random: Math.random * 3,
    friends: ['friend 1', 'friend 2', 'friend 3', 'friend 4'],
  },
  '2': {
    id: '2',
    name: 'black adam',
    age: Math.trunc(Math.random() * 50) + 1,
    random: Math.random * 3,
    friends: ['friend 1', 'friend 2', 'friend 3', 'friend 4'],
  },
  '3': {
    id: '3',
    name: 'cat woman',
    age: Math.trunc(Math.random() * 50) + 1,
    random: Math.random * 3,
    friends: ['friend 1', 'friend 2', 'friend 3', 'friend 4'],
  },
  '4': {
    id: '4',
    name: 'dare devil',
    age: Math.trunc(Math.random() * 50) + 1,
    random: Math.floor(Math.random * 3) + 1,
    friends: ['friend 1', 'friend 2', 'friend 3', 'friend 4'],
  },
};

const schema = buildSchema(`
    type User {
      id:String,
      name:String,
      age: Int,
      random:Float,
      friends: [String]
    }

    type Query {
        user(id:String): User
    }
`);
const root = {
  user: ({ id }) => fakeData[id],
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
