import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import FormComponent from './FormComponent'
import InputDisplay from './InputDisplay'
import PeopleViewer from './PeopleViewer'
import AddPersonForm from './AddPersonForm'

function App() {
  const [name, setName] = useState<string>("")

  return (
    <div className="App">
      <FormComponent state={name} setState={setName}/>
      <InputDisplay state={name}/>
      <PeopleViewer/>
      <AddPersonForm/>
    </div>
  )
}

export default App
