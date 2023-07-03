import './App.css';
import NavBar from '../src/components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greating="HOLA"/>
    </div>
  );
}

export default App;
