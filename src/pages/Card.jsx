import React from 'react';
import { CiEdit } from 'react-icons/ci';
import { IoEyeOutline } from 'react-icons/io5';
import { MdDeleteOutline } from 'react-icons/md';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const Card = ({data}) => {
    const {
            name,
            taste,
            supplier,
            price,
            photo,
            _id
            

    }= data;


     const handelDelete = (id)=>{
        
         Swal.fire({
           title: "Are you sure?",
           text: "You won't be able to revert this!",
           icon: "warning",
           showCancelButton: true,
           confirmButtonColor: "#3085d6",
           cancelButtonColor: "#d33",
           confirmButtonText: "Yes, delete it!"
         }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:5000/users/${id}` , {
                method:"DELETE"
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data , "delete runng")
                  Swal.fire({
                     title: "Deleted!",
                     text: "Your Coffee has been deleted.",
                     icon: "success"
            
          });
            })
          
  }
});
     }
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
            <Link to={`/ditels/${_id}`}>
              <button className='text-[#ffffff] font-bold bg-[#D2B48C] w-1/3 mx-auto p-2 text-center flex justify-center items-center shadow-sm  rounded-sm '><IoEyeOutline  size={22} /></button>
            </Link>
            <Link to={`/update/${_id}`}>
              <button className='text-[#ffffff] font-bold bg-[#1B1A1A] w-1/3 mx-auto p-2 text-center flex justify-center items-center shadow-sm  rounded-sm '><CiEdit size={22} /></button>
            </Link>
              <button onClick={()=>handelDelete(_id)} className='text-[#ffffff] font-bold bg-[#EA4744] w-1/3 mx-auto p-2 text-center flex justify-center items-center shadow-sm  rounded-sm '><MdDeleteOutline size={22} /></button>
               
            </div>

        </div>
    );
};

export default Card;