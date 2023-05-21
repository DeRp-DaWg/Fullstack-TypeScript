import { Button, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useSubmit } from 'react-router-dom'

type Props = {}

export default function CreateAddressRoute({}: Props) {
  const [street, setStreet] = useState<string>("")
  const [city, setCity] = useState<string>("")
  const [country, setCountry] = useState<string>("")
  const [zip, setZip] = useState<string>("")
  
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
            <TextField name='street' label="Street" value={street} onChange={event => setStreet(event.target.value)} />
          </Grid>
          <Grid item>
            <TextField name='city' label="City" value={city} onChange={event => setCity(event.target.value)} />
          </Grid>
          <Grid item>
            <TextField name='country' label="Country" value={country} onChange={event => setCountry(event.target.value)} />
          </Grid>
          <Grid item>
            <TextField name='zip' label="Zip" value={zip} onChange={event => setZip(event.target.value)} />
          </Grid>
          <Grid item>
            <Button type='submit' variant='outlined'>Submit</Button>
          </Grid>
        </Grid>
      </form>
    </>
  )
}