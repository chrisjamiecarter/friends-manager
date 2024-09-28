import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AddFriendForm from './components/AddFriendForm';
import FriendList from './components/FriendList';
import ErrorDisplay from './components/ErrorDisplay';
import Footer from './components/Footer';
import AddContactForm from './components/AddContactForm';
import EditFriendForm from './components/EditFriendForm';
import DeleteFriendForm from './components/DeleteFriendForm';

function App() {
  return (
    <div className="flex flex-col min-h-svh">
      <Header />
      <main className='w-full max-w-7xl my-4 mx-auto px-4 flex-grow'>
        <ErrorDisplay />
        <Routes>
          <Route exact path="/" element={<FriendList />} />
          <Route path="/friend/add" element={<AddFriendForm />} />
          <Route path="/friend/contact" element={<AddContactForm />} />
          <Route path="/friend/edit/:id" element={<EditFriendForm />} />
          <Route path="/friend/delete/:id" element={<DeleteFriendForm />} />
        </Routes>
      </main>
      <Footer />
      </div>
  );
}

export default App;
