import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFriendThunk } from '../redux/friendsSlice';

const AddFriendForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    lastContactDate: '',
    lastContactType: '',
    desiredContactFrequency: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation
    if (!formData.name || !formData.category) {
      alert('Please fill out all fields');
      return;
    }
    dispatch(addFriendThunk(formData));
    setFormData({
      name: '',
      category: '',
      lastContactDate: '',
      lastContactType: '',
      desiredContactFrequency: ''
    });
  };

  return (
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md">
        
        <h2 className="text-lg font-semibold text-gray-700 capitalize">Add New Friend</h2>
        
        <form onSubmit={handleSubmit}>       
        
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div className='col-span-full'>
                    <label className="text-gray-700" htmlFor="name">Name</label>
                    <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Friend's Name" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                </div>

                <div>
                    <label className="text-gray-700" htmlFor="category">Category</label>
                    <select id='category' name="category" value={formData.category} onChange={handleChange} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring">
                        <option value="">Select Category</option>
                        <option value="Work">Work</option>
                        <option value="Family">Family</option>
                        <option value="Close Friend">Close Friend</option>
                        <option value="Acquaintance">Acquaintance</option>
                    </select>
                </div>

                <div>
                    <label className="text-gray-700" htmlFor="lastContactDate">Last Contact Date</label>
                    <input id="lastContactDate" type="date" name="lastContactDate" value={formData.lastContactDate} onChange={handleChange} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                </div>

                <div>
                    <label className="text-gray-700" htmlFor="lastContactType">Last Contact Type</label>
                    <input id="lastContactType" type="text" name="lastContactType" value={formData.lastContactType} onChange={handleChange} placeholder="Last Contact Type" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                </div>

                <div>
                    <label className="text-gray-700" htmlFor="desiredContactFrequency">Desired Contact Frequency</label>
                    <input id="desiredContactFrequency" type="number" name="desiredContactFrequency" value={formData.desiredContactFrequency} onChange={handleChange} placeholder="Contact Frequency (days)" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" />
                </div>

            </div>

            <div className="flex justify-end mt-6">
                <button type="submit" className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Add Friend</button>
            </div>

        </form>

    </section>
  );
};

export default AddFriendForm;
