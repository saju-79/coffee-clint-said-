import React from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';
import { Link, useLoaderData } from 'react-router';

const Ditels = () => {
    const data =  useLoaderData()
     const {name , price , supplier , taste , catcategory , details ,photo} = data;
    return (
       <div className="w-10/12 mx-auto bg-gray-300 rounded-sm shadow-sm p-4 ">
            <Link to="/" className='text-2xl  font-bold text-[#374151] p-3 ml-4 flex gap-1 items-center '> <IoArrowBackOutline /> Back to home</Link>
         <div className='  flex   gap-6  items-center  '>
           
            <div className="w-1/2 text-center justify-center items-center flex">
               <img className=' md:p-4 lg:p-8  h-70 md:h-100 object-cover ' src={photo} alt="" />
            </div>
            <div className="1/2 p-8  flex flex-col space-y-3   text-start justify-start">
             <h1 className='text-2xl font-medium text-[#1B1A1A] '>Name    : <span className="text-[#1B1A1A70]">{name}</span></h1>
             <h1 className='text-2xl font-medium text-[#1B1A1A] '>supplier: <span className="text-[#1B1A1A70]">{supplier}</span></h1>
             <h1 className='text-2xl font-medium text-[#1B1A1A] '>taste   : <span className="text-[#1B1A1A70]">{taste}</span></h1>
             <h1 className='text-2xl font-medium text-[#1B1A1A] '>category: <span className="text-[#1B1A1A70]">{catcategory}</span></h1>
             <h1 className='text-2xl font-medium text-[#1B1A1A] '> price  : <span className="text-[#1B1A1A70]">{price}</span></h1>
             <h1 className='text-2xl font-medium text-[#1B1A1A] '>details : <span className="text-[#1B1A1A70]">{details}</span></h1>
           
            </div>
        </div>
       </div>
    );
};

export default Ditels;