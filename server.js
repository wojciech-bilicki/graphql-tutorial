import express from 'express';
import {graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import schema from './schema';

const server = express();

server.use('/graphiql', graphiqlExpress({
  endpointURL: "/graphql"
}))

server.use('/graphql',bodyParser.json(), graphqlExpress({
  schema
}))


server.listen(4000, () => {
  console.log('Server ready on port 4000')
})