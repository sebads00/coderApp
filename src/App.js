import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from "./components/ItemCount/ItemCount"


function App() {
  return(
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="esto es una prop"/>
     <ItemCount stock={5} initial={1} /> 
    </div>
  );
}
export default App;



