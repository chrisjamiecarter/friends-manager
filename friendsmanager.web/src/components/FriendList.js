import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadFriendsThunk } from '../redux/friendsSlice';

const FriendList = () => {
    const dispatch = useDispatch();
    const friends = useSelector((state) => state.friends.data);
    const loading = useSelector((state) => state.friends.status);

    useEffect(() => {
        dispatch(loadFriendsThunk());
    }, [dispatch]);

    if (loading === 'loading') {
        return (
            <div className='friends-list'>
                <h2 className="text-center text-lg font-bold my-4">Friends</h2>
                <p>Loading Friends</p>
            </div>
        );
    };

    return (
        <div className='friends-list'>
            <h2 className="text-center text-lg font-bold my-4">Friends</h2>
            <table className="min-w-full text-left text-sm font-light text-surface">
                <thead className="border-b border-slate-200 font-medium">
                    <tr>
                        <th scope="col" className="px-6 py-4">ID</th>
                        <th scope="col" className="px-6 py-4">Name</th>
                    </tr>
                </thead>
                <tbody>
                    {friends && friends.map(friend => {
                        return (
                            <tr key={friend.id} className="border-b border-slate-200 hover:bg-slate-500 hover:text-white">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">{friend.id}</td>
                                <td className="whitespace-nowrap px-6 py-4 font-medium">{friend.name}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default FriendList;
