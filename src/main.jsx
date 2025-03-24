import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createHashRouter, createRoutesFromElements, Route } from 'react-router'
import { RouterProvider } from 'react-router-dom'
import Home from './page/Home.jsx'
import AboutUs from './page/AboutUs.jsx'
import ContactUs from './page/ContactUs.jsx'
import Portfolio from './page/Portfolio.jsx'

const router = createHashRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<Home />} />
      <Route path='/aboutUs' element={<AboutUs />} />
      <Route path='/contact' element={<ContactUs />} />
      <Route path='/portfolio' element={<Portfolio />} />
      {/* <Route path='/dashboard' element={<Dashboard />} /> */}
      {/* <Route path='*' element={<NotFound />} /> */}
    </Route>
  ),
  { basename: "/" }
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
