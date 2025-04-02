export const schema = gql`
  type ExamplePost {
    id: Int!
    title: String!
    content: String!
  }

  type Query {
    examplePosts: [ExamplePost!]! @requireAuth
  }
`
