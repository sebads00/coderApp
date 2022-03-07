import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Routes, Route } from "react-router-dom"
import ProductsPage from "./pages/ProductsPage"
import ProductDetailPage from "./pages/ProductDetailPage"
import CartPage from "./pages/CartPage/CartPage"
import { CartProvider } from './context/CartContext';
import { CheckOutPage } from './pages/CheckOutPage';

function App() {

  return(
    
    <div className="App">
      <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/products">
            <Route index element={<ProductsPage />} />
            <Route path="/products" element={<ProductsPage />}/>
          </Route>
    
          <Route path="/products">
            <Route index element={<ProductsPage/>}/>
            <Route path=":id" element={<ProductDetailPage/>}/>
            </Route>
            <Route path="category/:category" element= {<ProductsPage/>}/>
          <Route path="/Cart">
            <Route index element={<CartPage/>}/>
            </Route>
          <Route path="/CheckOut/:orderId">
            <Route index element={<CheckOutPage/>}/>
            </Route>
        </Routes>
    </BrowserRouter> 
    </CartProvider>
    
   
  
    </div>
  );
}
export default App;



