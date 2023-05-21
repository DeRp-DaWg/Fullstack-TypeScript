import { gql } from "@apollo/client"

const query = gql`
  query Hobbies {
    hobbies {
      id
      name
    }
  }
`

export default query
