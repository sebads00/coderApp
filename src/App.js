import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from "./components/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from "./components/ItemCount/ItemCount"
import HomePage from "./pages/HomePage"
import Theme from "./components/Theme"
import CartWidget from './components/CartWidget';
import ItemDetail from "./components/ItemDetail/ItemDetail"
import { BrowserRouter , Routes, Route } from "react-router-dom"
import ProductsPage from "./pages/ProductsPage"
import AboutPage from "./pages/AboutPage"
import ProductDetailPage from "./pages/ProductDetailPage"
import CartPage from "./pages/CartPage"
import { CartProvider } from './context/CartContext';

function App() {

  return(
    
    <div className="App">
      <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />}/>
              <Route path="/about" element={<AboutPage />}/>
          </Route>
      
          <Route path="/products">
            <Route index element={<ProductsPage/>}/>
            <Route path=":id" element={<ProductDetailPage/>}/>
            </Route>
          <Route path="/Cart">
            <Route index element={<CartPage/>}/>
            </Route>
        </Routes>
    </BrowserRouter> 
    </CartProvider>
    
   
  
    </div>
  );
}
export default App;



