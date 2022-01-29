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



function App() {

  return(
    
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />}/>
            <Route path="/about" element={<AboutPage />}/>
          </Route>
        </Routes>
    </BrowserRouter> 

          
  
    </div>
  );
}
export default App;

<ItemDetail/>

   {/* <Container>
        <Row>
        <ItemListContainer />
        </Row>
  
      </Container> */}



