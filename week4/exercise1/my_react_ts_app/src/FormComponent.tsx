import React from 'react'

interface Props {state: any, setState: React.Dispatch<React.SetStateAction<string>>}

export default function InputComponent({state, setState}: Props) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

  }
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setState(event.target.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={state} onChange={handleChange}/>
      </label>
    </form>
  )
}