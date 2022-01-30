import React from 'react';
import Welcome from './components/Welcome';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import MenuBar from './components/MenuBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="app-container">
      <MenuBar />
      <Routes>
        <Route path='/Welcome' element={<Welcome/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Projects' element={<Projects/>} />
        <Route path='/Contact' element={<Contact/>} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;