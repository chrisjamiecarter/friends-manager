import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { updateFriendThunk } from '../redux/friendsSlice';

const EditFriendForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector((state) => state.categories.data);
  const friends = useSelector((state) => state.friends.data);

  const { id } = useParams();
  const getFriend = () => {
    const index = friends.findIndex(friend => friend.id === id);
    if (index !== -1) {
        return friends[index];
    }
  }
  const friend = getFriend();
  
  const [formData, setFormData] = useState({
    name: friend.name,
    categoryid: friend.category.id,
    desiredContactFrequency: friend.desiredContactFrequency,
  });

  if (!friend) {
    // If no friend data is available, redirect or show an error message.
    // TODO: IMPROVE.
    return <div>Error: Invalid friend id.</div>;
  }

  const handleCancel = () => {
    navigate(-1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation.
    if (!formData.name || !formData.categoryid || !formData.desiredContactFrequency) {
      alert('Please fill out all fields');
      return;
    }

    const request = {};
    request.id = friend.id;
    request.name = formData.name;
    request.desiredContactFrequency = formData.desiredContactFrequency;
    request.lastContactDate = friend.lastContactDate;
    request.lastContactType = friend.lastContactType;
    request.categoryId = formData.categoryid;

    dispatch(updateFriendThunk(request));
    navigate('/');
  };

  return (
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md">
        
        <h2 className="text-lg font-semibold text-gray-700 capitalize">Edit Friend</h2>
        
        <form onSubmit={handleSubmit}>       
        
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div className='col-span-full'>
                    <label className="text-gray-700" htmlFor="name">Name</label>
                    <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Friend's Name" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                </div>

                <div>
                    <label className="text-gray-700" htmlFor="category">Category</label>
                    <select id='category' name="categoryid" value={formData.categoryid} onChange={handleChange} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring">
                        <option value="">Select Category</option>
                        {categories.map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="text-gray-700" htmlFor="desiredContactFrequency">Desired Contact Frequency</label>
                    <input id="desiredContactFrequency" type="number" name="desiredContactFrequency" value={formData.desiredContactFrequency} onChange={handleChange} placeholder="Contact Frequency (days)" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                </div>

            </div>

            <div className="flex justify-between mt-6">
              <button type='button' onClick={handleCancel} className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Cancel</button>
              <button type='submit' className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Edit Friend</button>
            </div>

        </form>

    </section>
  );
};

export default EditFriendForm;
