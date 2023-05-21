import Person from "../models/personModel"
import Hobby from "../models/hobbyModel"
import Address from "../models/addressModel"
export default {
    person: async (_parent:never, { id }:{id:String}) => await Person.findById(id).populate(['hobbies', 'addresses']),
    hobby: async (_parent:never, { id }:{id:String}) => await Hobby.findById(id).populate('people'),
    address: async (_parent:never, { id }:{id:String}) => await Address.findById(id).populate('people'),
    people: async ()=> await Person.find({}).populate('hobbies', 'addresses'),//{return [{name:'perter',age:33}]}//Person.find({})
    hobbies: async ()=> await Hobby.find({}).populate('people'),
    addresses: async ()=> await Address.find({}).populate('people')
}
