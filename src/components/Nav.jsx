import React from 'react';
import menu from '/menuIcon.svg'
import heart from '/saveIcon.svg'
import cart from '/cartIcon.png'
import user from '/userIcon.png'
function Nav() {
    return (
        <div className="flex flex-row justify-between w-full ">
            <div>
                <img src={menu} alt="Menu icon" className='hover:cursor-pointer'/>
            </div>
            <div className='flex flex-row gap-3.5'>
                <img src={heart} alt="Add to favourite" className='hover:cursor-pointer'/>
                <img src={cart} alt="Add to cart" className='hover:cursor-pointer'/>
                <img src={user} alt="Profile" className='hover:cursor-pointer'/>
            </div>
        </div>
    );
}

export default Nav;