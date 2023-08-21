import React from 'react';
import logo from '/logo.svg'

function Header() {
    return (
        <div className='flex flex-col items-center gap-7 my-[44px]'>
            <img src={logo} alt="Give me art logo" className='w-[284px]'/>
            <p className='text-text font-raleway font-semi-bold text-center text-[21px]'>
                <span className='block text-accent font-bold'>Generate your ART</span>
                by typing in field below any words that comes to your mind!
            </p>
        </div>
    );
}

export default Header;