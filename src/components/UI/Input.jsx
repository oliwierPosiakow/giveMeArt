import React from 'react';
import penIcon from '/penIcon.png'

function Input({placeholder}) {
    return (
        <div className='w-full flex bg-offwhite shadow-md rounded-md overflow-hidden mt-[40px] mb-[20px]'>
            <input className='px-3 w-full text-text font-raleway font-medium bg-offwhite placeholder:text-gray' type="text" placeholder={placeholder}/>
            <div className='bg-accent flex items-center justify-center p-3 rounded-md cursor-pointer'>
                <img src={penIcon} alt=""/>
            </div>
        </div>
    );
}

export default Input;