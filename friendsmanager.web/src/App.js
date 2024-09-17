import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import FriendList from './components/FriendList';
import ErrorDisplay from './components/ErrorDisplay';

function App() {
  return (
    <div className="app-container">
      <Header />
      <ErrorDisplay />
      <Routes>
        <Route exact path="/" element={<FriendList />} />
      </Routes>
      </div>
  );
}

export default App;
