import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import Finance from './Components/Finance/Finance'
import HumanResources from './Components/HumanResources/HumanResources'
import Warehouse from './Components/Warehouse/Warehouse'
import Dashboard from './Components/Dashboard/Dashboard'
import Sales from './Components/Sales/Sales'

function App() {


  let route = createBrowserRouter([
    {
      path : '/' , element : <Layout/> , children : [
        {index : true , element : <Dashboard/>},
        {path : 'Finance' , element : <Finance/>},
        {path : 'Sales' , element : <Sales/>},
        {path : 'HumanResources' , element : <HumanResources/>},
        {path : 'Warehouse' , element : <Warehouse/>},
      ]
    }
  ]);

  return <>  <RouterProvider router={route}></RouterProvider>
  </>
}

export default App
