import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { Box, CssBaseline, ThemeOptions, ThemeProvider, createTheme, useMediaQuery } from '@mui/material'
import * as color from '@mui/material/colors'

type Props = {}

export default function IndexRoute({}: Props) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  
  const lightTheme: ThemeOptions = {
    palette: {
      // mode: "light",
      primary: color.teal,
      secondary: color.red,
      background: {
        default: color.teal[50],
        // paper: color.teal[100]
      }
    }
  }
  
  const darkTheme: ThemeOptions = {
    palette: {
      mode: "dark",
      primary: color.teal,
      secondary: color.red,
      background: {
        // paper: purple[900]
      },
      text: {
        primary: color.teal[50],
        secondary: color.red[50],
        disabled: color.teal[100]
      }
    }
  }
  
  const theme = React.useMemo(
    () => 
      createTheme(prefersDarkMode ? darkTheme : lightTheme),
    [prefersDarkMode]
  )
  
  return (
    <>
      <ThemeProvider theme={theme}>
      <CssBaseline/>
      <NavBar/>
      <Box padding={2}>
        <Outlet/>
      </Box>
      </ThemeProvider>
    </>
  )
}
