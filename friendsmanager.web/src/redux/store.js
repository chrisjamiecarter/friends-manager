import { configureStore } from '@reduxjs/toolkit';
import friendsReducer from './friendsSlice';
import apiStatusReducer from './apiStatusSlice';

const store = configureStore({ 
    reducer: {
        friends: friendsReducer,
        apiStatus: apiStatusReducer,
    }
});

export default store;
