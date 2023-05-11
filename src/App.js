import logo from './logo.svg';
import './App.css';

import Ex2 from './components/Ex2';
import { Route, Routes } from 'react-router-dom';
import Basic from './components/Basic';
import Navbar from './components/Navbar';
import ViewData from './components/ViewData';
import TableArray from './components/TableArray';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/Ex2' element={<Ex2/>}/>
        <Route path='/table' element={<TableArray/>}/>
        <Route path='/view' element={<ViewData/>}/>

      </Routes>
   
    </div>
  );
}

export default App;
