// import {categories} from "../data";
import {PersonType, AddressTypeDocument} from "../types"

export default {
    people: async (address:AddressTypeDocument): Promise<PersonType[]> => {
    const populatedAddress = (await address.populate('people'))
    return populatedAddress.people
  }
}
