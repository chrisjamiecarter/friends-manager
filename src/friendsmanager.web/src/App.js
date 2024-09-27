import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AddFriendForm from './components/AddFriendForm';
import FriendList from './components/FriendList';
import ErrorDisplay from './components/ErrorDisplay';
import Footer from './components/Footer';
import AddContactForm from './components/AddContactForm';
import DeleteFriendForm from './components/DeleteFriendForm';

function App() {
  return (
    <div className="flex flex-col min-h-svh">
      <Header />
      <main className='w-full max-w-7xl my-4 mx-auto px-4 flex-grow'>
        <ErrorDisplay />
        <Routes>
          <Route exact path="/" element={<FriendList />} />
          <Route path="/addfriend" element={<AddFriendForm />} />
          <Route path="/addcontact" element={<AddContactForm />} />
          <Route path="/deletefriend/:id" element={<DeleteFriendForm />} />
        </Routes>
      </main>
      <Footer />
      </div>
  );
}

export default App;
