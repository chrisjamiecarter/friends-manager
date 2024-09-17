import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadFriends } from '../redux/actions';

const Contacts = () => {

    let dispatch = useDispatch();
    const friends = useSelector((state) => state.friends);

    useEffect(() => {
        dispatch(loadFriends());
    }, []);
    
    return (
        <div>
            <h2 className="text-lg font-bold">Friends</h2>
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
};

export default Contacts;
