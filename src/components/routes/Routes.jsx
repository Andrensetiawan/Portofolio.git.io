import React from 'react';import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Layout from './Layout';
import PageNotFound from './PageNotFound';
import Home from '../Home';
import About from '../About'
import Skill from '../Skills'
import School from '../School'
import Contact from '../Contact'
import SD from '../school/SD'
import SMP from '../school/SMP'
import SMK from '../school/SMK'
import UNPAM from '../school/Unpam'




function Routes() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Layout/>,
          errorElement : <PageNotFound/>,
          children: [
            {
              path: "/",
              element: <Home />,
            },
            {
                path: "/About",
                element: <About/>,

            },
            {
                path: "/Skills",
                element: <Skill/>,

            },
            {
                path: "/School",
                element: <School/>,
                children: [
                    {
                        path: 'SD',
                        element: <SD/>
                    },
                    {
                        path: 'SMP',
                        element: <SMP/>
                    },
                    {
                        path: 'SMK',
                        element: <SMK/>
                    },
                    {
                        path: 'UNPAM',
                        element: <UNPAM/>
                    },
                ],
            },
            
            {
                path: "/Contact",
                element: <Contact/>,

            }
        ]
        },
      ]);
  return (
    <>
    <RouterProvider router={router} />
  </>
  );
};

export default Routes