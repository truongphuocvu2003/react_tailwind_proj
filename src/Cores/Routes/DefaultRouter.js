import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Modules/Home/Home'
import { NotFound } from '../Modules/Home/NotFound'

const AdminLayout = React.lazy(() =>
  import('../../Components/Layouts/Admin/AdminLayout'),
)

export default function DefaultRouter(props) {
  return (
    <Routes>
      <Route path="" element={<Home />}></Route>
      <Route
        path="admin/*"
        element={
          <React.Suspense fallback={<>...</>}>
            <AdminLayout />
          </React.Suspense>
        }
      ></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  )
}
