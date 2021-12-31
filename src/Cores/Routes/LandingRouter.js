import React from 'react'
import { useRoutes } from 'react-router-dom'
import Home from '../Modules/Home/Home'
import { NotFound } from '../Modules/Home/NotFound'
import Profile from '../Modules/Home/Profile/Profile'

export default function LandingRouter(props) {
  const routes = useRoutes([
    { path: '', element: <Home /> },
    { path: 'profile', element: <Profile /> },
    { path: '*', element: <NotFound /> },
  ])
  return <React.Suspense fallback={<>Loading...</>}>{routes}</React.Suspense>
}
