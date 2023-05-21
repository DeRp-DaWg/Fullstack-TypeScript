import { gql } from "@apollo/client"

const query = gql`
  query People {
    people {
      id
      name
      age
    }
  }
`

export default query
