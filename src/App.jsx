import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Second } from './Pages/Second'
import { Third } from './Pages/Third'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './Pages/Home'

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:"/second",
      element:<Second/>
    },{
      path:"/third",
      element:<Third/>
    }
  ])
  // const [count, setcode Count] = useState(0)

  return (
    <>
    <RouterProvider router={router}/>
    
    {/* <Third/> */}
    {/* <Second/> */}
    {/* <Home/> */}
       {/* <h1 >
      Hello world!
    </h1> */}
    </>
  )
}

export default App
