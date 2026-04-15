import React from 'react';

const FriendCounter = () => {
    return (
        <div className='container mx-auto grid grid-cols-4 gap-4'>
            <div className='text-center shadow-lg p-8 rounded-2xl'>
                <h3 className='font-semibold text-3xl mb-2 text-[#244D3F]'>0</h3>
                <p className='text-lg text-[#64748B]'>Total Friends</p>
            </div>
            <div className='text-center shadow-lg p-8 rounded-2xl'>
                <h3 className='font-semibold text-3xl mb-2 text-[#244D3F]'>0</h3>
                <p className='text-lg text-[#64748B]'>On Track</p>
            </div>
            <div className='text-center shadow-lg p-8 rounded-2xl'>
                <h3 className='font-semibold text-3xl mb-2 text-[#244D3F]'>0</h3>
                <p className='text-lg text-[#64748B]'>Need Attention</p>
            </div>
            <div className='text-center shadow-lg p-8 rounded-2xl'>
                <h3 className='font-semibold text-3xl mb-2 text-[#244D3F]'>0</h3>
                <p className='text-lg text-[#64748B]'>Interactions This Month</p>
            </div>
           
        </div>
    );
};

export default FriendCounter;