import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { deleteFriendThunk } from '../redux/friendsSlice';

const DeleteFriendForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const friends = useSelector((state) => state.friends.data);
  
  const { id } = useParams();
  const getFriend = () => {
    const index = friends.findIndex(friend => friend.id === id);
    if (index !== -1) {
        return friends[index];
    }
  }
  const friend = getFriend();

  if (!friend) {
    // If no friend data is available, redirect or show an error message.
    // TODO: IMPROVE.
    return <div>Error: Invalid friend id.</div>;
  }
  
  const handleCancel = () => {
    navigate(-1);
  };

  const handleDelete = () => {
    dispatch(deleteFriendThunk(friend.id));
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-semibold text-center text-gray-800">
        Delete Friend
      </h1>
      
      <p className="mt-4 text-center text-gray-600">
        Are you sure you want to delete <strong>{friend.name}</strong>?
      </p>
      
      <div className="flex justify-center mt-6">
        <button type='submit' onClick={handleDelete} className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600 mr-2">Delete</button>
        <button type='button' onClick={handleCancel} className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Cancel</button>
      </div>
    </div>
  );
};

export default DeleteFriendForm;
