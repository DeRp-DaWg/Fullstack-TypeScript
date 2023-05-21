// import {categories} from "../data";
import {PersonType, HobbyTypeDocument} from "../types"

export default {
    people: async (hobby:HobbyTypeDocument): Promise<PersonType[]> => {
    const populatedHobby = (await hobby.populate('people'))
    return populatedHobby.people
  }
}
