import React from 'react'
import { useRoutes } from 'react-router-dom'
import NotFound from '../Modules/Portals/NotFound'
import SplashScreen from '../Modules/Portals/SplashScreen'

const Todo = React.lazy(() => import('../Modules/Portals/Todo/Todo'))
const Dashboard = React.lazy(() => import('../Modules/Portals/Dashboard'))

export default function AdminRouter(props) {
  const routes = useRoutes([
    { path: '/', element: <Dashboard /> },
    { path: '/todo', element: <Todo /> },
    { path: '/*', element: <NotFound /> },
  ])
  return (
    <React.Suspense
      fallback={
        <>
          <SplashScreen></SplashScreen>
        </>
      }
    >
      {routes}
    </React.Suspense>
  )
}
