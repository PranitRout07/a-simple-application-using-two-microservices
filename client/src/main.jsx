import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import MountainPhotos from './components/MountainPhotos.jsx'
import Home from './components/Home.jsx'
import ModernCityPhotos from './components/ModernCityPhotos.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"mountains",
        element:<MountainPhotos/>
      },
      {
        path:"cities",
        element:<ModernCityPhotos/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
    
  </StrictMode>,
)
