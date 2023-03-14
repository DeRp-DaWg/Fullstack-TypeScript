import { Person, PersonIncomplete, PersonNoID } from "./types/personType";
import fs = require("fs/promises")

const jsonFilePath = `${__dirname}/../public/people.json`

export async function getAllPeople(): Promise<Person[]> {
  const dataBuffer = await fs.readFile(jsonFilePath)
  const people = JSON.parse(dataBuffer.toString()).person as Person[]
  return people
}

export async function getPersonById(id: number): Promise<Person> {
  const people = await getAllPeople()
  const person = people.find(person => person.id===id)
  if (person !== undefined) {
    return person
  } else {
    return Promise.reject()
  }
}

export async function createPerson(person: PersonNoID): Promise<void> {
  const people = await getAllPeople()
  person.id = people[people.length-1].id + 1
  people.push(person as Person)
  return fs.writeFile(jsonFilePath, JSON.stringify({person: people}))
}

export async function updatePerson(person: Person): Promise<void> {
  const people = await getAllPeople()
  const index = people.findIndex(existingPerson => existingPerson.id===person.id)
  if (index < 0) {
    return Promise.reject()
  }
  people[index] = person
  return fs.writeFile(jsonFilePath, JSON.stringify({person: people}))
}

function mergeObjects<T>(o1: T, o2: T) {
  for (const property in o2) {
    const value = o2[property]
    if (value !== undefined) {
      o1[property] = value
    }
  }
}

export async function patchPerson(person: PersonIncomplete): Promise<void> {
  const people = await getAllPeople()
  const index = people.findIndex(existingPerson => existingPerson.id===person.id)
  if (index < 0) {
    return Promise.reject()
  }
  mergeObjects(people[index], person)
  return fs.writeFile(jsonFilePath, JSON.stringify({person: people}))
}

export async function deletePerson(id: number): Promise<void> {
  const people = await getAllPeople()
  const index = people.findIndex(existingPerson => existingPerson.id===id)
  if (index < 0) {
    return Promise.reject()
  }
  people.splice(index)
  return fs.writeFile(jsonFilePath, JSON.stringify({person: people}))
}
