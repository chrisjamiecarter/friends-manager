import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Friends from './pages/Friends';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Friends />} />
      </Routes>
      </div>
  );
}

export default App;
