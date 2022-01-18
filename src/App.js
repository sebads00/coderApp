import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from "./components/ItemCount/ItemCount"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CartWidget from './components/CartWidget';



function App() {
  
  return(
    <div className="App">
          <NavBar />
      <Container>

        <Row>
          <Col sm><ItemListContainer /></Col>
          <Col sm><ItemListContainer /></Col>
          <Col sm><ItemListContainer /></Col>
        </Row>
  
      </Container>
    </div>
  );
}
export default App;



