import React from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';
import { Link, useLoaderData } from 'react-router';
import Update from './Update';
 

const Updates = () => {
    const data = useLoaderData()
    return (
        <div className='bg-gray-300 p-2 rounded-sm shadow-sm'>
             <Link to="/" className='text-2xl  font-bold text-[#374151] p-3 ml-4 flex gap-1 items-center '> <IoArrowBackOutline /> Back to home</Link>
             <div className=" text-center justify-center items-center flex flex-col my-10 space-y-4"> 
                 <h1 className='text-4xl text-[#331A15] font-bold'>Update Existing Coffee Details <span className='text-[#D2B48C]'> </span></h1>
                 <p className='text-sm text-[#1B1A1A]'>It is a long established fact that a reader will  be distraceted by the readable content of a page when looking at its layout. The point of <br /> using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as <br />opposed to using Content here.</p>
                 
             </div>
           
             <div className=" p-4">
                 <Update data={data}></Update>
             </div>
        </div>
    );
};

export default Updates;                                