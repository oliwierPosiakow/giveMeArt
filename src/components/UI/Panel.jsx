import React from 'react';

function Panel({text}) {
    return (
        <div className='bg-offwhite flex justify-center items-center w-1/3 py-3 px-1 rounded-md cursor-pointer mb-[20px]'>
            <p className='text-text font-raleway text-[14px] font-semi-bold'>{text}</p>
        </div>
    );
}

export default Panel;