import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './ProductsHome';
import ProductsList from './ProductList';
import ProductDetails from './ProductDetails';
const RouterConfiguration = () => {
return <BrowserRouter>
<Routes>
<Route path="/" element={<Home />}/>
<Route path="/products" element = {<ProductsList/>} />
<Route path="/products/:id" element = {<ProductDetails/>} />
</Routes>
</BrowserRouter>
}
export default RouterConfiguration;