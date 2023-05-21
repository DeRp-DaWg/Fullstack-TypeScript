import { gql } from "@apollo/client"

const mutation = gql`
  mutation AddPersonToAddress($personId: ID!, $addressId: ID!) {
    addPersonToAddress(personId: $personId, addressId: $addressId)
  }
`

export default mutation
