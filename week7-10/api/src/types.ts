import { Document } from 'mongoose'

type PersonType = {
    name: string,
    age: number,
    hobbies: HobbyType[]
    addresses: AddressType[]
}

type HobbyType = {
    name: string,
    people: PersonType[]
}

type AddressType = {
    street: string,
    city: string,
    country: string,
    zip: string,
    people: PersonType[]
}

interface PersonDocumentType extends PersonType, Document {}
interface HobbyTypeDocument extends HobbyType, Document {} // Extend both the Typescript type and the Mongoose Document type to get access to both sets of properties.
interface AddressTypeDocument extends AddressType, Document {}

export type {
    PersonType, PersonDocumentType,
    HobbyType, HobbyTypeDocument,
    AddressType, AddressTypeDocument
}
