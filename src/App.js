import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Vehicles from './components/Vehicles';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/vehicles" element={<Vehicles/>}/>
      </Routes></BrowserRouter>
      
    </div>
  );
}

export default App;
