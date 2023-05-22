import { Box, Button, FormLabel, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useSubmit } from 'react-router-dom'

type Props = {}

export default function CreatePersonRoute({}: Props) {
  const [personName, setPersonName] = useState<string>("")
  const [personAge, setPersonAge] = useState<number>(0)
  
  const submit = useSubmit()
  
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    submit(event.currentTarget, {
      method: "post",
      action: ""
    })
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} direction={"column"} alignContent={"center"}>
          <Grid item>
            <TextField name='name' label="Name" value={personName} onChange={event => setPersonName(event.target.value)} />
          </Grid>
          <Grid item>
            <TextField name='age' label="Age" inputMode='numeric' value={personAge} onChange={event => setPersonAge(parseInt(event.target.value) || 0)} />
          </Grid>
          <Grid item>
            <Button type='submit' variant='outlined'>Submit</Button>
          </Grid>
        </Grid>
      </form>
    </>
  )
}