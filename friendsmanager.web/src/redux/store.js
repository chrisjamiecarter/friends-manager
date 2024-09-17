import { configureStore } from '@reduxjs/toolkit';
import friendReducer from "./reducer";

const store = configureStore({ reducer: friendReducer });

export default store;
