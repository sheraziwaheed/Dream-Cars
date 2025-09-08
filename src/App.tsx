import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes}  from 'react-router-dom';
import Car from './components/Car/Car';
import Description from './components/Description/Description';
function App() {
  console.log("all");
  return(
    <Router>
    <Routes>
    <Route path='/' element={<Car/>}/>
    <Route path='/description/:id'element={<Description/>}/>
    </Routes>
    </Router>
  ) 
  }
export default App;
