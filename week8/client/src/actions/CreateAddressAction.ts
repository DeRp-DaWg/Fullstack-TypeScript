import ApolloClientProvider from "../ApolloClientProvider";
import CreateAddressMutation from "../mutations/CreateAddressMutation";
import { AddressType } from "../types";

export default async function action({params, request}: {params: any, request: Request}) {
  const client = ApolloClientProvider
  
  const formData = await request.formData()
  const street = formData.get("street")
  const city = formData.get("city")
  const country = formData.get("country")
  const zip = formData.get("zip")
  
  const result = await client.mutate({mutation: CreateAddressMutation, variables: {street, city, country, zip}})
  const address = result.data.createAddress as AddressType
  return {address}
}
