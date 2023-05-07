import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './components/Detail';
import Home from './components/Home'

function App() {
  return (
    <div className="App c1">
      <BrowserRouter>
      
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/detail/:id' element={<Detail/>}/>
      </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
