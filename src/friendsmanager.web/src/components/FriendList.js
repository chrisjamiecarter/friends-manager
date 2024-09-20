import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadFriendsThunk } from '../redux/friendsSlice';
import FriendCard from './FriendCard';

const FriendList = () => {
    const dispatch = useDispatch();
    const friends = useSelector((state) => state.friends.data);
    const loading = useSelector((state) => state.friends.status);
    
    useEffect(() => {
        dispatch(loadFriendsThunk());
    }, [dispatch]);

    if (loading === 'loading') {
        return (
            <div className='friends-container'>
                <h2 className='text-center text-lg font-semibold text-slate-800 capitalize my-4'>Friends</h2>
                <p>Loading Friends</p>
            </div>
        );
    };

    return (
        <div className='friends-container'>
            <h2 className='text-center text-lg font-semibold text-slate-800 capitalize my-4'>Friends</h2>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {friends && friends.map((friend) => (
                    <FriendCard key={friend.id} friend={friend} />
                ))}
            </div>
        </div>
    )
}

export default FriendList;
