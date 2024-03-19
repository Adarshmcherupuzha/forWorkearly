import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Vehicles from './components/Vehicles';
import Safety from './components/Safety';
import Help from './components/Help';
import Login from './components/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/vehicles" element={<Vehicles/>}/>
      <Route path="/safety" element={<Safety/>}/>
      <Route path="/help" element={<Help/>}/>
      <Route path="/login" element={<Login/>}/>
      </Routes></BrowserRouter>
      
    </div>
  );
}

export default App;
