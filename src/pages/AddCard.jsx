 import React from 'react';
import { IoArrowBackOutline } from 'react-icons/io5';
import { Link } from 'react-router';
 
 const AddCard = () => {
    const handleAddcard = e=>{
        e.preventDefault();
        console.log("asidsdfshj")
        const from = e.target;

//   const data = Object.fromEntries(new FormData(from));
const coffeeDitels = Object.fromEntries(new FormData(from));
 
       fetch("http://localhost:5000/users" , {
         method:"POST",
         headers:{
            "content-type" : "application/json",
         },
         body:JSON.stringify(coffeeDitels)

       })
       .then(res => res.json())
       .then(data =>{
        console.log("data running" ,  data )
       })   
     
    }
    return ( 
        <div className='w-10/12 mx-auto bg-gray-300 rounded-sm shadow-sm p-4'>
             <Link to="/" className='text-2xl font-bold text-[#374151] p-3 ml-4 flex gap-1 items-center '> <IoArrowBackOutline /> Back to home</Link>
            <div className="   text-center p-5 md:p-10   justify-center items-center space-y-4">
                <h1 className='text-5xl font-bold text-[#374151] text-center  items-center '>Add New Coffee</h1>
                <h2 className='text-xl font-normal  items-center  text-[#1B1A1A70]'>
                    It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using <br /> Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed <br /> to using Content here.
                </h2>
 
           </div>
           {/* input section */}
             <form onSubmit={handleAddcard} action="">
           <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
                 <fieldset className="fieldset mt-2">
                     <legend className="fieldset-legend text-[#374151] text-xl">Name</legend>
                      <input name='name' placeholder='Enter coffee name' className='  px-6 py-4  rounded-sm   bg-gray-100 ' type="text" />
                  </fieldset>
                 <fieldset className="fieldset mt-2">
                     <legend className="fieldset-legend text-[#374151] text-xl">Supplier</legend>
                      <input name='supplier' placeholder='Enter coffee supplier' className='  px-6 py-4  rounded-sm   bg-gray-100 ' type="text" />
                  </fieldset>
                 <fieldset className="fieldset mt-2">
                     <legend className="fieldset-legend text-[#374151] text-xl">price</legend>
                      <input name='price' placeholder='Enter coffee price' className='  px-6 py-4  rounded-sm   bg-gray-100 '  type='number'/>
                  </fieldset>
                 <fieldset className="fieldset mt-2">
                     <legend className="fieldset-legend text-[#374151] text-xl">Taste</legend>
                      <input name='taste' placeholder='Enter coffee taste' className='  px-6 py-4  rounded-sm   bg-gray-100 ' type="text" />
                  </fieldset>
                 <fieldset className="fieldset mt-2">
                     <legend className="fieldset-legend text-[#374151] text-xl">Category</legend>
                      <input name='category' placeholder='Enter coffee category' className='  px-6 py-4  rounded-sm   bg-gray-100 ' type="text" />
                  </fieldset>
                 <fieldset className="fieldset mt-2">
                     <legend className="fieldset-legend text-[#374151] text-xl">Details</legend>
                      <input name='details' placeholder='Enter coffee details' className='  px-6 py-4  rounded-sm   bg-gray-100 ' type="text" />
                  </fieldset>
           </div>
                   <fieldset className="fieldset mt-2">
                     <legend className="fieldset-legend text-[#374151] text-xl">Photo</legend>
                      <input name='photo' placeholder='Photo URL' className='  px-6 py-4  rounded-sm   bg-gray-100 ' type='url' />
                  </fieldset>
                   <input className='mt-4  px-6 py-4  w-full  rounded-sm border-2 border-[#331A15]   bg-[#D2B48C] ' type="submit" value="Add Coffee"   />
             </form>
        </div>
    );
 };
 
 export default AddCard;






 