import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Contacts from './pages/Contacts';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Contacts />} />
      </Routes>
      </div>
  );
}

export default App;
