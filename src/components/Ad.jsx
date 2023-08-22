import React from 'react';
import boy from '/boyImg.png'
import padlockIcon from '/padlockIcon.png'
function Ad() {
    return (
        <div className='w-full flex rounded-xl overflow-hidden shadow-xl mb-6'>
            <div className='w-1/2 flex flex-col items-center bg-[#f9f9fa] p-2'>
                <p className='font-semi-bold text-[13px]'>Style preview</p>
                <img src={boy} alt="Boy img"/>
            </div>
            <div className='w-1/2 flex flex-col items-center justify-center bg-[#f2f2f5] gap-3'>
                <p className='uppercase font-semi-bold text-[14px]'>minimalistic</p>
                <div className='bg-accent py-2.5 px-6 shadow-[inset_4px_4px_10px_rgba(0,0,0,0.4)] rounded-lg'>
                    <p className='uppercase text-offwhite'>cartoon</p>
                </div>
                <div className='flex justify-center items-center gap-1'>
                    <img src={padlockIcon} alt="Padlock icon, content locked"/>
                    <p className='uppercase text-dark-gray text-stroke]'>artistic</p>
                </div>
            </div>
        </div>
    );
}

export default Ad;