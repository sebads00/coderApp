import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return(
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="esto es una prop"/>
    </div>
  );
}
export default App;



