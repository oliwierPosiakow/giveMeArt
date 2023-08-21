import React from 'react';
import punkImg from '/exampleImg.jpg'
import arrow from '/arrowRight.svg'
function Card() {
    return (
        <div className='flex flex-col justify-center items-center w-full bg-[#f8f8f9] rounded-xl py-3'>

            <p className='uppercase font-medium text-[20px] text-center'>
                <span className='block font-bold text-accent'>
                    Get Inspired!
                </span>
                BEST USERS DESIGNS
            </p>

            <div className='flex gap-2 text-[18px] items-center font-semi-bold'>
                <a href='#'>See more</a>
                <img className='w-[15px] h-[15px] bottom-0' src={arrow} alt="Arrow right"/>
            </div>

            <img className='w-[224px]' src={punkImg} alt="Punk, ghotic image."/>

            <div className='w-full flex justify-between align-middle bg-gray rounded-md mt-1 overflow-hidden'>
                <p className='px-3 py-2 font-raleway font-medium'>punk heart, gothic</p>
                <div className='px-3.5 py-2 bg-gradient-to-t from-[rgb(209, 209, 210)] to-[rgba(207, 207, 208, 0.00)]'>
                    <p className='font-raleway font-medium uppercase'>artistic</p>
                </div>
            </div>

            <a className='uppercase text-offwhite bg-accent w-1/2 text-center py-1.5 rounded-lg text-[20px] font-semi-bold mt-6' href="#">buy</a>
        </div>
    );
}

export default Card;