import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loadFriends, addFriend, addContact } from '../services/api';

export const loadFriendsThunk = createAsyncThunk('friends/loadFriends', async () => {
    const response = await loadFriends();
    return response;
});

export const addFriendThunk = createAsyncThunk('friends/addFriend', async (friend) => {
    const response = await addFriend(friend);
    return response;
});

export const updateFriendThunk = createAsyncThunk('friends/updateFriend', async (friend) => {
    const response = await addContact(friend);
    return response;
});

const friendsSlice = createSlice({
    name: 'friends',
    initialState: {
        data: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadFriendsThunk.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(loadFriendsThunk.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
                state.error = null;
            })
            .addCase(loadFriendsThunk.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addFriendThunk.fulfilled, (state, action) => {
                state.data.push(action.payload);
            });
    }
});

export default friendsSlice.reducer;
