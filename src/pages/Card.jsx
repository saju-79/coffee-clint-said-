import React from 'react';
import { CiEdit } from 'react-icons/ci';
import { IoEyeOutline } from 'react-icons/io5';
import { MdDeleteOutline } from 'react-icons/md';

const Card = ({data}) => {
    const {
            name,
            taste,
            supplier,
            price,
            photo
 

    }= data;
    return (
        <div className='flex justify-between  items-center p-4   rounded-lg bg-gray-300 '>
             <div className="w-2/5 p-4">
            <img className='h-70' src={photo} alt="" />
            </div>
            <div className="w-2/5">
             <h1 className='text-lg font-medium text-[#1B1A1A] '>Name: <span className="text-[#1B1A1A70]">{name}</span></h1>
             <h1 className='text-lg font-medium text-[#1B1A1A] '>Supplier: <span className="text-[#1B1A1A70]">{supplier}</span></h1>
             <h1 className='text-lg font-medium text-[#1B1A1A] '>Taste: <span className="text-[#1B1A1A70]">{taste}</span></h1>
             <h1 className='text-lg font-medium text-[#1B1A1A] '>Price: <span className="text-[#1B1A1A70]">{price ? price : "000"} Taka</span></h1>
            </div>
            <div className="w-1/5 flex flex-col gap-3">
              <button className='text-[#ffffff] font-bold bg-[#D2B48C] w-1/3 mx-auto p-2 text-center flex justify-center items-center shadow-sm  rounded-sm '><IoEyeOutline  size={22} /></button>
              <button className='text-[#ffffff] font-bold bg-[#1B1A1A] w-1/3 mx-auto p-2 text-center flex justify-center items-center shadow-sm  rounded-sm '><CiEdit size={22} /></button>
              <button className='text-[#ffffff] font-bold bg-[#EA4744] w-1/3 mx-auto p-2 text-center flex justify-center items-center shadow-sm  rounded-sm '><MdDeleteOutline size={22} /></button>
               
            </div>

        </div>
    );
};

export default Card;