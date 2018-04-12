import mongoose from 'mongoose'
import authorModel from './models/author'


const resolvers = {
  Query: {
    authors: () => {
      return authorModel.find()
    },
    author: (root, args) => {
      const id = args.id;
      return authorModel.findOne({id: id});
    }
  },
  Mutation: {
    addAuthor: (root, {name, age, Books}) => {
      const author = new authorModel({name, age, Books})
      return author.save()
    },
    deleteAuthor: (root, {id}) => {
        return authorModel.findOneAndRemove({id: id})
    },
    updateAuthor:(root, {id, name})=> {
        return authorModel.findOneAndUpdate({id:id}, {name})
    }
  }
}

export default resolvers;

