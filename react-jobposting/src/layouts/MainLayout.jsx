import React from 'react'
// React Outlet is used within the AllRoutes component to render child routes within a parent route.
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// Navbar will be on every page
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer />
    </>
  )
}

export default MainLayout
