import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/pages/About.jsx';
import Contact from './components/pages/Contact.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import Porfolio from './components/pages/Portfolio.jsx';
import Resume from './components/pages/Resume.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <About/>,
      },

      {
        path: '/Portfolio',
        element: <Porfolio/>,
      },

      {
        path: '/Contact',
        element: <Contact/>,
      },

      {
        path: '/Resume',
        element: <Resume/>,
      }
    ]
    }
])


ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />

)
