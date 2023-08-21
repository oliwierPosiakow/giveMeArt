import React from 'react';

function ProgressBar() {
    return (
        <div className='w-full flex'>
            <div className='w-1/3 relative flex flex-col items-center gap-3.5'>
                <div className='w-[116px] border-4 border-accent rounded'></div>
                <div className='flex justify-center items-center w-[24px] h-[24px] absolute left-1/2 top-0 -translate-y-1/3 -translate-x-1/2 bg-accent rounded-lg'>
                    <p className='text-white font-raleway font-regular'>1</p>
                </div>
                <div className='w-[80%]'>
                    <p className='font-raleway font-semi-bold text-accent text-center text-[14px]' >
                        Generate image
                    </p>
                </div>
            </div>
            <div className='w-1/3 relative flex flex-col items-center gap-3.5'>
                <div className='w-[116px] border-4 border-gray rounded'></div>
                <div className='flex justify-center items-center w-[24px] h-[24px] absolute left-1/2 top-0 -translate-y-1/3 -translate-x-1/2 bg-gray rounded-lg'>
                    <p className='text-dark-gray'>2</p>
                </div>
                <div className='w-[80%]'>
                    <p className='font-raleway font-regular text-gray text-center text-[14px] ' >
                        Choose your product
                    </p>
                </div>
            </div>
            <div className='w-1/3 relative flex flex-col items-center gap-3.5'>
                <div className='w-[116px] border-4 border-gray rounded'></div>
                <div className='flex justify-center items-center w-[24px] h-[24px] absolute left-1/2 top-0 -translate-y-1/3 -translate-x-1/2 bg-gray rounded-lg'>
                    <p className='text-dark-gray'>3</p>
                </div>
                <div className='w-[80%]'>
                    <p className='font-raleway font-regular text-gray text-center text-[14px]' >
                        Order
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProgressBar;