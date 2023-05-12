import './App.css';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <ItemListContainer gretting='¡Hey, bienvenido!'></ItemListContainer>
      </header>
    </div>
  );
}

export default App;
