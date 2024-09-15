import { configureStore } from '@reduxjs/toolkit';
import contactReducer from "./reducer";

const store = configureStore({ reducer: contactReducer });

export default store;
