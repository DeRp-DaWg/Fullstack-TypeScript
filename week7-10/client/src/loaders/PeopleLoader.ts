import { PersonType } from "../types"
import ApolloClientProvider from "../ApolloClientProvider"
import GetAllPeopleQuery from "../queries/GetAllPeopleQuery";

export default async function loader({params}: any) {
  const client = ApolloClientProvider;
  
  const queryResult = await client.query({query: GetAllPeopleQuery, fetchPolicy: "network-only"})
  const people = queryResult.data.people as PersonType[]
  return {people}
}
