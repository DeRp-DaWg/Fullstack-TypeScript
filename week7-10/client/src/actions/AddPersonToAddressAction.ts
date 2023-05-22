import ApolloClientProvider from "../ApolloClientProvider";
import AddPersonToAddressMutation from "../mutations/AddPersonToAddressMutation";

export default async function action({params, request}: {params: any, request: Request}) {
  const client = ApolloClientProvider
  
  const formData = await request.formData()
  const personId = formData.get("personId")
  const addressId = params.id
  
  const result = await client.mutate({mutation: AddPersonToAddressMutation, variables: {personId, addressId}})
  return result.data
}
