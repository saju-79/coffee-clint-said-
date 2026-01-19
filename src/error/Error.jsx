import React from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div>
             <Link to="/" className='text-2xl text-center justify-center items-center my-8   font-bold text-[#374151] p-3 ml-4 flex gap-1 items-center '> <IoArrowBackOutline /> Back to home</Link>
             <div className="">
                <img className='w-full h-screen' src="https://i.ibb.co.com/TxjFC4Vc/404.gif" alt="" />
                
             </div>
        </div>
    );
};

export default Error;