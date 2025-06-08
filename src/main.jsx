import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/contect/Contec.jsx'
import User from './components/user/User.jsx'
import Login from './components/login/Login.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        path: "",
        element: <Home/>
      },
      {
        path:"about",
        element: <About/>

      },
      {
        path:"contect",
        element: <Contact/>

      },
      {
        path:"user/:userid",
        element: <User/>

      },
      {
        path:"login",
        element:<Login/>
      }
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < RouterProvider router={router} /> 
  </StrictMode>,
)
