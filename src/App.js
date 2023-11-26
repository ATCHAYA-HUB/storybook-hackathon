import React from 'react'
import{ BrowserRouter, Route,Routes} from 'react-router-dom';
import './App.css';
import Mainpage from './Mainpage';
import Maincover from './Maincover';
import Chapter1 from './Chapter1';
import Chapter1b from './Chapter1b';
import Chapter2 from './Chapter2';
import Chapter3 from './Chapter3';
import Chapter4 from './Chapter4';
import Chapter5 from './Chapter5';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Maincover/>}></Route>
      <Route path="/Mainpage" element={<Mainpage/>}></Route>
      <Route path="/Chapter1" element={<Chapter1/>}></Route>
      <Route path="/Chapter1b" element={<Chapter1b/>}></Route>
      <Route path="/Chapter2" element={<Chapter2/>}></Route>
      <Route path="/Chapter3" element={<Chapter3/>}></Route>
      <Route path="/Chapter4" element={<Chapter4/>}></Route>
      <Route path="/Chapter5" element={<Chapter5/>}></Route>
      </Routes></BrowserRouter>
  );
}

export default App;
