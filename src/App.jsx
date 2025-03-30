import { Outlet } from 'react-router'
import './App.css'

function App() {

  // document.body.classList.add("theme-monochrome");

  return (
    <>
      <div className="bg-primary-light p-[2rem]">
        <Outlet />
      </div>
    </>
  )
}

export default App
