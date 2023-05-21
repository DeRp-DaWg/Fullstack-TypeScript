import { AppBar, LinkProps, Tab, Tabs, Toolbar, Typography, useTheme } from '@mui/material'
import React from 'react'
// import { Link } from 'react-router-dom'
import { Link, To, matchPath, useLocation } from 'react-router-dom'

type Props = {}

export default function NavBar({}: Props) {
  const theme = useTheme()
  
  function useRouteMatch(patterns: readonly string[]) {
    const { pathname } = useLocation();
  
    for (let i = 0; i < patterns.length; i += 1) {
      const pattern = patterns[i];
      const possibleMatch = matchPath({path: pattern, end: false}, pathname);
      if (possibleMatch !== null) {
        return possibleMatch;
      }
    }
    return null;
  }
  
  function CustomTabs() {
    const routeMatch = useRouteMatch(["/people", "/addresses", "/hobbies"])
    const currentTab = routeMatch?.pattern.path
    
    return (
      <Tabs value={currentTab} textColor="secondary" indicatorColor="secondary">
        <Tab label="People" value="/people" to="/people" component={Link} sx={{color: theme.palette.common.black}}/>
        <Tab label="Addresses" value="/addresses" to="/addresses" component={Link} sx={{color: theme.palette.common.black}}/>
        <Tab label="Hobbies" value="/hobbies" to="/hobbies" component={Link} sx={{color: theme.palette.common.black}}/>
      </Tabs>
    )
  }
  
  return (
    <AppBar position="static" enableColorOnDark>
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Typography variant="h6" color="common.black" noWrap sx={{ flexGrow: 1 }}>
          People Searcher
        </Typography>
        <CustomTabs />
      </Toolbar>
    </AppBar>
  )
}
