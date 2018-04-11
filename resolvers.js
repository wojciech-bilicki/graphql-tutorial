const authors = [
  {
    id: 1,
    name: 'JK Rowling',
    age: 50,
    Books: ["Harry Potter and the Goblet of Fire", "Harry Potter and the Prisoner of Azkaban"]
  },
  {
    id: 2,
    name: 'George RR Marting',
    age: 70,
    Books: ["GOT - Song of Ice and Fire", "GOT - A Dance with Dragons"]
  },
  {
    id: 3,
    name: 'Stephen King',
    age: 64,
    Books: ["It", "Carrie"]
  }
];

const resolvers = {
  Query: {
    authors: () => {
      return authors
    },
    author: (root, args) => {
      const id = args.id;
      return authors.find(author => author.id === id);
    }
  }
}

export default resolvers;

