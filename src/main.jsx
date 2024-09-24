import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Projeto from './routes/Projeto'
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/components/libs/main.sass'
import './styles/components/libs/mixin.sass'


const router = createBrowserRouter([
  { 
    path:"/",
    element: <App/>
  },
  { 
    path:"/projeto",
    element: <Projeto/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
