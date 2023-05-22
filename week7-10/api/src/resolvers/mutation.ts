import Person from "../models/personModel"
import Hobby from "../models/hobbyModel"
import Address from "../models/addressModel"
import { PersonDocumentType, HobbyTypeDocument, AddressType, AddressTypeDocument } from '../types'
import { ObjectId } from 'mongoose'
import hobby from "./hobby"

export default {
  createPerson: async (_parent : never, { name, age } : PersonDocumentType) => {
    const newPerson = new Person({ name, age })
    await newPerson.save()
    return newPerson
  },
  deletePerson: async (_parent : never, { id } : PersonDocumentType) => {
    const result = await Person.findByIdAndDelete(id)
    return result
  },
  updatePerson: async (_parent : never, { id, name } : PersonDocumentType) => {
    const result = await Person.findByIdAndUpdate(id, {name})
    return result
  },
  createHobby: async (_parent : never, { name } : HobbyTypeDocument) => {
    const newHobby = new Hobby({ name })
    await newHobby.save()
    return newHobby
  },
  // removePersonFromAddressOld: async (_parent:never, { personId, addressId }:{personId:String,addressId:String}) => {
  //   const person : PersonDocumentType | null = await Person.findById(personId);
  //   const address : AddressTypeDocument | null = await Address.findById(addressId);
  //   if(!person || !address) return false;
  //   Address.findByIdAndUpdate(addressId, { $pull: { persons: personId } });
  //   Person.findByIdAndUpdate(personId, { address: null });
  //   return address;
  // },

  removePersonFromHobby: async (
    _parent : never,
    { personId, hobbyId } : { personId : string, hobbyId : string }
  ) => {
    try {
      const person = await Person.findById(personId)
      const hobby = await Hobby.findOneAndUpdate(
        { _id: hobbyId },
        { $pull: { people: personId } },
        { new: true }
      )
      if (!person || !hobby) {
        throw new Error('Person or hobby not found.')
      }
      const index: number = person.hobbies.findIndex(hobby => hobby.id.toString() == hobbyId)
      person.hobbies.splice(index)
      person.save()
      await Person.findByIdAndUpdate(personId, { hobby: null })
      return true
    } catch (error) {
      console.error(error)
      return false
    }
  },
  addPersonToHobby: async (
    _parent : never,
    { personId, hobbyId } : { personId : string, hobbyId : string }
  ) => {
    try {
      const person : PersonDocumentType | null = await Person.findById(personId)
      const hobby : HobbyTypeDocument | null = await Hobby.findById(hobbyId)

      if (!person) { throw new Error(`Person with ID ${personId} not found.`) }
      if (!hobby) { throw new Error(`Hobby with ID ${hobbyId} not found.`) }
      if (hobby.people.some((p: any) => p.id === personId)) {
        throw new Error(`Person with ID ${personId} is already associated with hobby with ID ${hobbyId}.`)
      }
      person.hobbies.push(hobby._id)
      hobby.people.push(person._id)
      await person.save()
      await hobby.save()
      return true
    } catch (error) {
      console.error(error)
      return false
    }
  },
  createAddress: async (
    _parent : never,
    { street,
      city,
      country,
      zip
    } : AddressTypeDocument
  ) => {
    const newAddress = new Address({ street, city, country, zip })
    await newAddress.save()
    return newAddress
  },
  addPersonToAddress: async (
    _parent: never,
    { personId, addressId }: { personId: string, addressId: string }
  ) => {
    try {
      const person : PersonDocumentType | null = await Person.findById(personId)
      const address : AddressTypeDocument | null = await Address.findById(addressId)
      
      if (!person) { throw new Error(`Person with ID ${personId} not found.`) }
      if (!address) { throw new Error(`Address with ID ${addressId} not found.`) }
      if (address.people.some((p: any) => p.id === personId)) {
        throw new Error(`Person with ID ${personId} is already associated with address with ID ${addressId}.`)
      }
      person.hobbies.push(address._id)
      address.people.push(person._id)
      await person.save()
      await address.save()
      return true
    } catch (error) {
      console.error(error)
      return false
    }
  }
}
