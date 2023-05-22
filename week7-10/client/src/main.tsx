import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Link as RouterLink, LinkProps as RouterLinkProps, RouterProvider } from "react-router-dom"

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import IndexRoute from './routes/IndexRoute.tsx'

import PeopleRoute from './routes/Person/PeopleRoute.tsx'
import ViewPeopleRoute from './routes/Person/ViewPeopleRoute.tsx'
import CreatePersonRoute from './routes/Person/CreatePersonRoute.tsx'
import PeopleLoader from './loaders/PeopleLoader.ts'

import AddressesRoute from './routes/Address/AddressesRoute.tsx'
import ViewAddressesRoute from './routes/Address/ViewAddressesRoute.tsx'
import CreateAddressRoute from './routes/Address/CreateAddressRoute.tsx'
import AddressesLoader from './loaders/AddressesLoader.ts'

import HobbiesRoute from './routes/Hobby/HobbiesRoute.tsx'
import ViewHobbiesRoute from './routes/Hobby/ViewHobbiesRoute.tsx'
import CreateHobbyRoute from './routes/Hobby/CreateHobbyRoute.tsx'
import HobbiesLoader from './loaders/HobbiesLoader.ts'
import CreatePersonAction from './actions/CreatePersonAction.ts'
import CreateAddressAction from './actions/CreateAddressAction.ts'
import AddPersonToAddressAction from './actions/AddPersonToAddressAction.ts'
import AddPersonToAddressRoute from './routes/Address/AddPersonToAddressRoute.tsx'

// const LinkBehavior = React.forwardRef<
//   HTMLAnchorElement,
//   Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to']}
// >((props, ref) => {
//   const { href, ...other } = props
//   return <RouterLink data-testid="custom-link" ref={ref} to={href} {...other}/>
// })

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexRoute/>,
    children: [
      {
        path: "people",
        element: <PeopleRoute/>,
        children: [
          {
            index: true,
            loader: PeopleLoader,
            element: <ViewPeopleRoute/>
          },
          {
            path: "create",
            action: CreatePersonAction,
            element: <CreatePersonRoute/>
          }
        ]
      },
      {
        path: "addresses",
        element: <AddressesRoute/>,
        children: [
          {
            index: true,
            element: <ViewAddressesRoute/>,
            loader: AddressesLoader
          },
          {
            path: "create",
            action: CreateAddressAction,
            element: <CreateAddressRoute/>
          },
          {
            path: "addPerson/:id",
            action: AddPersonToAddressAction,
            element: <AddPersonToAddressRoute/>
          }
        ]
      },
      {
        path: "hobbies",
        element: <HobbiesRoute/>,
        children: [
          {
            index: true,
            element: <ViewHobbiesRoute/>,
            loader: HobbiesLoader
          },
          {
            path: "create",
            element: <CreateHobbyRoute/>
          }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
