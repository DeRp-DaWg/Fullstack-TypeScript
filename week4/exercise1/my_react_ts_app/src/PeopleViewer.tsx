import React, { ReactElement, ReactNode, useEffect, useState } from 'react'

interface Props {
  people: Person
  setPeople: React.
}
export interface Person {
  id: number
  name: string
  age: number
  city: string
}

export default function PeopleViewer({people, setPeople}: Props) {
  const [people, setPeople] = useState<Person[]>([])
  const [personRows, setPersonRows] = useState<JSX.Element[]>([])

  useEffect(() => {
    fetch("http://localhost:3008/person")
    .then(response => response.json())
    .then(data => {setPeople(data)})
  }, [])
  
  useEffect(() => {
    setPersonRows(people.map((person) => {
      return (
        <tr key={person.id}>
          <td>{person.id}</td>
          <td>{person.name}</td>
          <td>{person.age}</td>
          <td>{person.city}</td>
        </tr>
      )
    }))
  }, [people])

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>age</th>
            <th>city</th>
          </tr>
        </thead>
        <tbody>
          {personRows}
        </tbody>
      </table>
    </div>
  )
}