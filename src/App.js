import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<ItemListContainer gretting='¡Hey, bienvenido!'></ItemListContainer>}></Route>
            <Route path='/detail/:id' element={<ItemDetailContainer></ItemDetailContainer>}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
   
  );
}

export default App;
