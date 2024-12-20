import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createRoutesFromElements, Route, RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router'
import Home from './components/Home.tsx'
import AboutUs from './components/AboutUs.tsx'
import ContactUs from './components/ContactUs.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<Home />} />
      <Route path='/aboutUs' element={<AboutUs />} />
      <Route path='/contact' element={<ContactUs />} />
      {/* <Route path='/dashboard' element={<Dashboard />} /> */}
      {/* <Route path='*' element={<NotFound />} /> */}
    </Route>
  ),
  { basename: "/codeWebzzFrontend" }
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
