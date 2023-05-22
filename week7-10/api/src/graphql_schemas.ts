const typeDefs = `#graphql

type Hobby {
  id: ID!
  name: String!
  people: [Person!]!
}

type Person {
  id: ID!
  name: String!
  age: Int!
  hobbies: [Hobby!]!
  addresses: [Address!]!
}

type Address {
  id: ID!
  street: String!
  city: String!
  country: String!
  zip: String!
  people: [Person!]!
}

# The "Query" type is special: it lists all of the available queries that
# clients can execute, along with the return type for each. In this
type Query {
  person(id: ID): Person
  hobby(id: ID): Hobby
  address(id: ID): Address
  people: [Person!]!
  hobbies: [Hobby!]!
  addresses: [Address!]!
}

type Mutation {
  createPerson(
    name: String!,
    age: Int!
  ): Person
  updatePerson(id: ID!, name: String!, age: Int!): Person
  deletePerson(id: ID!): Person
  createHobby(name: String!): Hobby
  removePersonFromHobby(personId: ID!, hobbyId: ID!): Boolean
  addPersonToHobby(personId: ID!, hobbyId: ID!): Boolean
  createAddress(
    street: String!,
    city: String!,
    country: String!,
    zip: String!
  ): Address
  addPersonToAddress(personId: ID!, addressId: ID!): Boolean
}
`

export default typeDefs