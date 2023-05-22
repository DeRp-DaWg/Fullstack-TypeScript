import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import Table from '@mui/material/Table'
import React from 'react'

type Props = {
  collumnNames: string[]
  rows: [string[]]
}

export default function DataTable({
  collumnNames,
  rows
}: Props) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {collumnNames.map((name, index) => (
                <TableCell key={index}>{name}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, rowIndex) => (
              <TableRow key={`DataTable-${rowIndex}`}>
                {row.map((col, colIndex) => (
                    <TableCell key={`DataTable-${rowIndex}-${colIndex}`}>{col}</TableCell>
                ))}
              </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}