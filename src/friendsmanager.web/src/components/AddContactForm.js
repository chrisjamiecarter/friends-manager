import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { updateFriendThunk } from '../redux/friendsSlice';

const AddContactForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const friends = useSelector((state) => state.friends.data);
  
  const [formData, setFormData] = useState({
    friendid: '',
    contactDate: '',
    contactType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation
    if (!formData.friendid || !formData.contactDate || !formData.contactType) {
      alert('Please fill out all fields');
      return;
    }
    
    const friend = friends[friends.findIndex(f => f.id === formData.friendid)];

    const request = {};
    request.id = friend.id;
    request.name = friend.name;
    request.desiredContactFrequency = friend.desiredContactFrequency;
    request.lastContactDate = formData.contactDate;
    request.lastContactType = formData.contactType;
    request.categoryId = friend.category.id;

    dispatch(updateFriendThunk(request));
    navigate('/');
  };

  return (
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md">
        
        <h2 className="text-lg font-semibold text-gray-700 capitalize">Add Contact with Friend</h2>
        
        <form onSubmit={handleSubmit}>       
        
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div className='col-span-full'>
                    <label className="text-gray-700" htmlFor="name">Name</label>
                    <select id='friend' name="friendid" value={formData.friendid} onChange={handleChange} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring">
                        <option value="">Select Friend</option>
                        {friends.map((friend) => (
                          <option key={friend.id} value={friend.id}>
                            {friend.name}
                          </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="text-gray-700" htmlFor="ContactDate">Contact Date</label>
                    <input id="contactDate" type="date" name="contactDate" value={formData.contactDate} onChange={handleChange} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                </div>

                <div>
                    <label className="text-gray-700" htmlFor="contactType">Contact Type</label>
                    <input id="contactType" type="text" name="contactType" value={formData.contactType} onChange={handleChange} placeholder="Last Contact Type" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                </div>

            </div>

            <div className="flex justify-end mt-6">
                <button type="submit" className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Add Contact</button>
            </div>

        </form>

    </section>
  );
};

export default AddContactForm;
