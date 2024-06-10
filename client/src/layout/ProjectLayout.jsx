import React from 'react'
import Sidebar from '../components/Sidebar'
import ProjectNavbar from '../components/ProjectNavbar'
import { Outlet } from 'react-router-dom'

const ProjectLayout = () => {
  return (
    <div className='flex flex-row'>
      <div className=''>
        <Sidebar />
      </div>
       <div className='w-full'>
          <ProjectNavbar />
          <Outlet />
       </div>
    </div>
  )
}

export default ProjectLayout
