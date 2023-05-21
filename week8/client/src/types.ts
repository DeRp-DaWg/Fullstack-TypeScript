type PersonType = {
    id?: string,
    name: string,
    age: number,
    hobbies: HobbyType[]
    addresses: AddressType[]
}

type HobbyType = {
    id?: string,
    name: string,
    people: PersonType[]
}

type AddressType = {
    id?: string,
    street: string,
    city: string,
    country: string,
    zip: string,
    people: PersonType[]
}

export type {
    PersonType,
    HobbyType,
    AddressType
}
