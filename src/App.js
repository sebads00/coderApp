import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from "./components/ItemCount/ItemCount"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Theme from "./components/Theme"
import CartWidget from './components/CartWidget';



function App() {
  
  return(
    <div className="App">
          <NavBar />

         {/*  <Theme/> */}
      <Container>
        <Row>
        <ItemListContainer />
        </Row>
  
      </Container>
    </div>
  );
}
export default App;



