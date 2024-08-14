import { useState } from 'react'
import ProductsList from './product/ProductList'
import Home from './product/ProductsHome'
import RouterConfiguration from './product/ProductRouterConfiguration'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterConfiguration/>
    </>
  )
}

export default App
