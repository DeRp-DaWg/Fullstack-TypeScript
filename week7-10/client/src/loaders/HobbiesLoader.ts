import { HobbyType } from "../types"
import ApolloClientProvider from "../ApolloClientProvider"
import GetAllHobbiesQuery from "../queries/GetAllHobbiesQuery";

export default async function loader({params}: any) {
  const client = ApolloClientProvider;
  
  const queryResult = await client.query({query: GetAllHobbiesQuery, fetchPolicy: "network-only"})
  const hobbies = queryResult.data.hobbies as HobbyType[]
  return {hobbies}
}
