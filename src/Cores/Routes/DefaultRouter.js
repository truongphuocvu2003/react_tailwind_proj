import React from 'react'
import { Routes, Route } from 'react-router-dom'

const AdminLayout = React.lazy(() =>
  import('../../Components/Layouts/Admin/AdminLayout'),
)

const LandingLayout = React.lazy(() =>
  import('../../Components/Layouts/Landing/LandingLayout'),
)

export default function DefaultRouter(props) {
  return (
    <Routes>
      <Route
        path="admin/*"
        element={
          <React.Suspense fallback={<>Loading...</>}>
            <AdminLayout />
          </React.Suspense>
        }
      ></Route>
      <Route
        path="*"
        element={
          <React.Suspense fallback={<>Loading...</>}>
            <LandingLayout></LandingLayout>
          </React.Suspense>
        }
      ></Route>
    </Routes>
  )
}
