import express from 'express';
import {graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import schema from './schema';

const server = express();

server.use('/graphiql', graphiqlExpress({
  endpointURL: "/graphql"
}))

mongoose.connect('mongodb://localhost/graphqlTutorial')

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('===================================')
  console.log('Connection to DB open!')
  console.log('====================================')
})

server.use('/graphql',bodyParser.json(), graphqlExpress({
  schema
}))


server.listen(4000, () => {
  console.log('Server ready on port 4000')
})
