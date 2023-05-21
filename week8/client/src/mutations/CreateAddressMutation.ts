import { gql } from "@apollo/client"

const mutation = gql`
  mutation CreateAddress($street: String!, $city: String!, $country: String!, $zip: String!) {
    createAddress(street: $street, city: $city, country: $country, zip: $zip) {
      id
    }
  }
`

export default mutation
