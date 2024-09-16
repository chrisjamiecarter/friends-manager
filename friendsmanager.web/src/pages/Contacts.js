import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadContacts } from '../redux/actions';

const Contacts = () => {

    let dispatch = useDispatch();
    const contacts = useSelector((state) => state.contacts);

    useEffect(() => {
        dispatch(loadContacts());
    }, []);
    
    return (
        <div>
            <h2 className="text-lg font-bold">Contacts</h2>
            <table className="min-w-full text-left text-sm font-light text-surface">
                <thead className="border-b border-slate-200 font-medium">
                    <tr>
                        <th scope="col" className="px-6 py-4">ID</th>
                        <th scope="col" className="px-6 py-4">Name</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts && contacts.map(contact => {
                        return (
                            <tr key={contact.id} className="border-b border-slate-200 hover:bg-slate-500 hover:text-white">
                                <td className="whitespace-nowrap px-6 py-4 font-medium ">{contact.id}</td>
                                <td className="whitespace-nowrap px-6 py-4 font-medium">{contact.name}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
};

export default Contacts;
