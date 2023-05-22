import { gql } from "@apollo/client"

const query = gql`
  query Addresses {
    addresses {
      id
      street
      city
      country
      zip
    }
  }
`

export default query
