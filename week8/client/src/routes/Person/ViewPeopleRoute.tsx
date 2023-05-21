import { DataGrid, GridColDef, GridActionsCellItem, GridRowId, GridToolbarContainer } from '@mui/x-data-grid'
import React from 'react'
import { useLoaderData, useNavigate, useRevalidator } from 'react-router-dom'
import { PersonType } from '../../types'
import { Button } from '@mui/material'
import { gql } from '@apollo/client'
import ApolloClientProvider from "../../ApolloClientProvider";
import DeletePersonQuery from "../../queries/DeletePersonQuery"
import GetAllPeopleQuery from '../../queries/GetAllPeopleQuery'

type Props = {}

export default function ViewPeopleRoute({}: Props) {
  const {people} = useLoaderData() as {people: PersonType[]}
  
  const revalidator = useRevalidator()
  const navigate = useNavigate()
  
  const client = ApolloClientProvider
  
  function handleDeleteClick(id: GridRowId) {
    people.findIndex(person => person.id === id)
    client.mutate({mutation: DeletePersonQuery, variables: { deletePersonId: id }, refetchQueries: 'all'})
    .then((result) => {
      revalidator.revalidate()
    })
  }
  
  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      width: 150
    },
    {
      field: "age",
      headerName: "Age",
      width: 150
    },
    // {
    //   field: "hobbies",
    //   headerName: "Hobbies",
    //   width: 150
    // },
    // {
    //   field: "addresses",
    //   headerName: "Addresses",
    //   width: 150
    // },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            showInMenu
            label='Delete'
            onClick={() => handleDeleteClick(id)}
          />
        ]
      }
    }
  ]
  
  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <Button onClick={()=>revalidator.revalidate()}>Refresh</Button>
        <Button onClick={()=>navigate("create")}>Create new Person</Button>
      </GridToolbarContainer>
    )
  }
  
  return (
    <div>
      { people ?
        <DataGrid
          rows={people}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5
              }
            }
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          slots={{
            toolbar: CustomToolbar
          }}
        />
        :
        <></>
      }
    </div>
  )
}
