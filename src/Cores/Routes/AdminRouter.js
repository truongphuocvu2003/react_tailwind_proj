import { useRoutes } from 'react-router-dom'
import Dashboard from '../Modules/Portals/Dashboard'
import NotFound from '../Modules/Portals/NotFound'

export default function AdminRouter(props) {
  const routes = useRoutes([
    { path: '/', element: <Dashboard /> },
    { path: '/*', element: <NotFound /> }
  ])
  return routes
}
