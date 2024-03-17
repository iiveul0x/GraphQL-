import { GraphQLServer } from 'graphql-yoga'
// ... or using `require()`
// const { GraphQLServer } = require('graphql-yoga')


// Yapıyı https://github.com/dotansimha/graphql-yoga buradan hazır olarak alıyoruz.

// User için sahte veri.
const Users = [
    {
        id: 1,
        username: "John",
        city: 'Merlbourne'
    },
    {
        id: 2,
        username: "mseven",
        city: 'Istanbul'
    },
    {
        id: 3,
        username: "maria",
        city: 'Zagreb'
    },
]

// Post için sahte veri.
const Posts = [
    {
        id: 1,
        title: "Lorem 1",
        userId: 1
    },
    {
        id: 2,
        title: "Lorem 2",
        userId: 1
    },
    {
        id: 3,
        title: "Lorem 3",
        userId: 2
    },
    {
        id: 3,
        title: "New Post",
        userId: 1
    },
]

// Burada sorguda gelecek tanımları yazıyoruz.
const typeDefs = `
  type Query {
    

    user(id: ID!): User!
    post(id: ID!): Post!
    users: [User!]!
    posts: [Post!]!

  }
  type User{
      id:ID!
      username: String!
      city: String
      posts:[Post!]!
  }
  type Post{
      id:ID!
      title: String!
      userId: String
      user:User!
  }
`;

// Burada sorguya karşılık gelecek işlemleri yapıyoruz.
const resolvers = {
    Query: {

        // Tek bir user nesnesi için.
        user: (parent, args) => Users.find(user => String(user.id) === args.id),
        // Tek bir post nesnesi için.
        post: (parent, args) => Posts.find(post => String(post.id) === args.id),
        // Userların tümü için.
        users: (parent) => Users,
        // Postların tümü için.
        posts: (parent) => Posts,


    },

    // Post sorgusu içerisinde user döndürmek için.
    Post: {
        user: (parent) => Users.find(user => user.id == parent.userId)

    },

    // User sorgusu içerisinde postları döndürmek için.
    User: {
        posts: (parent) => Posts.filter(post => post.userId == parent.id)


    }
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))
