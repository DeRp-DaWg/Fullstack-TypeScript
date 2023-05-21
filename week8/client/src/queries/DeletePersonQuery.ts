import { gql } from "@apollo/client"

const query = gql`
  mutation DeletePerson($deletePersonId: ID!) {
    deletePerson(id: $deletePersonId) {
      id
    }
  }
`

export default query
