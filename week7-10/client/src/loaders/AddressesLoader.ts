import { AddressType } from "../types"
import ApolloClientProvider from "../ApolloClientProvider"
import GetAllAddressesQuery from "../queries/GetAllAddressesQuery";

export default async function loader({params}: any) {
  const client = ApolloClientProvider;
  
  const queryResult = await client.query({query: GetAllAddressesQuery, fetchPolicy: "network-only"})
  const addresses = queryResult.data.addresses as AddressType[]
  return {addresses}
}
