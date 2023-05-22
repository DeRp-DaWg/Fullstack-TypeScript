import { PersonDocumentType, HobbyType, AddressType } from '../types'
export default {
    hobbies: async (person: PersonDocumentType): Promise<HobbyType[]> => {
        const populatedPerson = await person.populate('hobbies')
        return populatedPerson.hobbies
    },
    addresses: async (person: PersonDocumentType): Promise<AddressType[]> => {
        const populatedPerson = await person.populate('addresses')
        return populatedPerson.addresses
    }
}
