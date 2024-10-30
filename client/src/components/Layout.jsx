import React from 'react'
import { Outlet } from 'react-router'

function Layout() {
  return (
    <div className='min-h-screen overflow-hidden  w-full bg-gradient-to-r from-black via-gray-700 to-zinc-700 '>
        <Outlet/>
    </div>
  )
}

export default Layout