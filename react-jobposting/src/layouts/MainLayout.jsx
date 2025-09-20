import React from 'react'
// React Outlet is used within the AllRoutes component to render child routes within a parent route.
import { Outlet } from 'react-router-dom'
// Navbar will be on every page
import Navbar from '../components/Navbar'


const MainLayout = () => {
  return <>
    <Navbar />
    <Outlet />
  </>
}

export default MainLayout
