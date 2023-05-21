import { gql } from "@apollo/client"

const mutation = gql`
  mutation CreatePerson($name: String!, $age: Int!) {
    createPerson(name: $name, age: $age) {
      id
    }
  }
`

export default mutation
