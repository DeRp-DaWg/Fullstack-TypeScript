import { Button, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useSubmit } from 'react-router-dom'

type Props = {}

export default function AddPersonToAddressRoute({}: Props) {
  const [personId, setPersonId] = useState<string>("")
  
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
            <TextField name='personId' label="Person ID" value={personId} onChange={event => setPersonId(event.target.value)} />
          </Grid>
          <Grid item>
            <Button type='submit' variant='outlined'>Submit</Button>
          </Grid>
        </Grid>
      </form>
    </>
  )
}