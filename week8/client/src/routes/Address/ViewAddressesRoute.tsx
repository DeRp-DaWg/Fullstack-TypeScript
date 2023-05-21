import { DataGrid, GridColDef, GridActionsCellItem, GridRowId, GridToolbarContainer } from '@mui/x-data-grid'
import React from 'react'
import { useLoaderData, useNavigate, useRevalidator, useSubmit } from 'react-router-dom'
import { AddressType } from '../../types'
import { Button } from '@mui/material'

type Props = {}

export default function ViewAddressesRoute({}: Props) {
  const {addresses} = useLoaderData() as {addresses: AddressType[]}
  
  const revalidator = useRevalidator()
  const navigate = useNavigate()
  
  function handleDeleteClick(id: GridRowId) {
    console.log(id)
  }
  
  function handleAddPersonClick(id: GridRowId) {
    navigate("addPerson/"+id)
  }
  
  const columns: GridColDef[] = [
    {
      field: "street",
      headerName: "Street",
      width: 150
    },
    {
      field: "city",
      headerName: "City",
      width: 150
    },
    {
      field: "country",
      headerName: "Country",
      width: 150
    },
    {
      field: "zip",
      headerName: "Zip code",
      width: 150
    },
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
          />,
          <GridActionsCellItem
            showInMenu
            label='Add Person'
            onClick={() => handleAddPersonClick(id)}
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
      <DataGrid
        rows={addresses}
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
    </div>
  )
}
