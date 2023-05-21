import ApolloClientProvider from "../ApolloClientProvider";
import CreatePersonMutation from "../mutations/CreatePersonMutation";
import { PersonType } from "../types";

export default async function action({params, request}: {params: any, request: Request}) {
  const client = ApolloClientProvider
  
  const formData = await request.formData()
  const name = formData.get("name")
  const age = parseInt(formData.get("age")!.toString())
  const result = await client.mutate({mutation: CreatePersonMutation, variables: {name, age}})
  const person = result.data.createPerson as PersonType
  return {person}
}
