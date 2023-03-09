import React, { useState } from 'react'
import { Person } from './PeopleViewer'


interface Props {}

export default function AddPersonForm({}: Props) {
  const [newPerson, setNewPerson] = useState<Person>({name: "", age: 0, city: ""} as Person)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log(newPerson)
  }

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    setNewPerson({...newPerson, [event.target.name]: event.target.value} as Person)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name: 
      </label>
      <input type="text" name="name" value={newPerson?.name} onChange={handleInput}/>
      <label>
        Age: 
      </label>
      <input type="number" name="age" value={newPerson?.age} onChange={handleInput}/>
      <label>
        City: 
      </label>
      <input type="text" name="city" value={newPerson?.city} onChange={handleInput}/>
      <button type="submit">Add person</button>
    </form>
  )
}
