import React from 'react';
import { differenceInDays, parseISO } from 'date-fns';

const FriendCard = ({ friend }) => {
  const { name, lastContactDate, desiredContactFrequency } = friend;
  const lastContactDaysAgo = differenceInDays(new Date(), parseISO(lastContactDate));
  const needsAttention = lastContactDaysAgo > desiredContactFrequency;

  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg shadow-lg">
        <div className="px-6 py-4">
            <h1 className="text-center text-xl font-semibold text-gray-800">{name}</h1>

            <div className='py-2'>
                <p className="text-gray-700">Last Contact: {lastContactDate}</p>
                <p className="text-gray-700">Days since last contact: {lastContactDaysAgo}</p>
            </div>
            
            <div className="flex items-center mt-4 text-gray-700">
                <svg aria-label="suitcase icon" className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 11H10V13H14V11Z"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z" />
                </svg>

                <h1 className="px-2 text-sm">Category</h1>

            </div>
            
            {needsAttention && <p className='text-center pt-2 text-red-600'>Needs Attention!</p>}
            
        </div>
    </div>
  );
};

export default FriendCard;
