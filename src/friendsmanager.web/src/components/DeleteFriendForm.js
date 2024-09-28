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
    navigate('/');
  };

  const handleDelete = () => {
    dispatch(deleteFriendThunk(friend.id));
    navigate('/');
  };

  return (
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md">
        
      <h2 className="text-lg font-semibold text-gray-700 capitalize">Delete Friend</h2>
                       
      <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div className='col-span-full'>
              <label className="text-gray-700" htmlFor="name">Name</label>
              <input id="name" type="text" name="name" value={friend.name} readOnly className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none read-only:bg-gray-100" />
          </div>

          <div>
              <label className="text-gray-700" htmlFor="category">Category</label>
              <input id="category" type="text" name="category" value={friend.category.name} readOnly className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none read-only:bg-gray-100" />
          </div>

          <div>
              <label className="text-gray-700" htmlFor="desiredContactFrequency">Desired Contact Frequency</label>
              <input id="desiredContactFrequency" type="text" name="desiredContactFrequency" value={friend.desiredContactFrequency} readOnly className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none read-only:bg-gray-100" />
          </div>

      </div>

      <div className="flex gap-1 mt-6">
        <button type="submit" onClick={handleDelete} className="w-28 px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-red-500 rounded-md hover:bg-red-400 focus:outline-none focus:bg-red-400">Delete</button>
        <button type='button' onClick={handleCancel} className="w-28 px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Cancel</button>
      </div>

    </section>
  );
};

export default DeleteFriendForm;
