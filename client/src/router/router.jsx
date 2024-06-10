import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from '../pages/Home';
import HomeLayout from '../layout/HomeLayout';
import ProjectLayout from '../layout/ProjectLayout';
import Upload from '../pages/Upload';

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
            path: '/',
            element: <Home />
        }
      ]
    },
    {
        path: "",
        element: <ProjectLayout />,
        children:[
          {
            path: '/project/upload/:id',
            element: <Upload />
          }
        ]
    }
  ]);

export default router;
