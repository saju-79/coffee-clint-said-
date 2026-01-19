import React from 'react';
import { LiaChessPawnSolid } from 'react-icons/lia';
import Swal from 'sweetalert2';

const Update = ({data}) => {
    const {
            name,
            taste,
            supplier,
            price,
            photo,
            _id,
            category,
            details
            

    }= data;

    const handelsUpfdate=(e)=>{
          e.preventDefault()
          const from = e.target ;
                 //   Try me!
              Swal.fire({
                   position: "top-end",
                   icon: "success",
                   title: " Update  Coffee successful",
                   showConfirmButton: false,
                   timer: 1500
                      });
         //   const data = Object.fromEntries(new FormData(from));
         const coffeeupdate = Object.fromEntries(new FormData(from));
         console.log(coffeeupdate)
          
    }
    return (
        
               <form onSubmit={handelsUpfdate} action="">
           <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-5">
                 <fieldset className="fieldset mt-2">
                     <legend className="fieldset-legend text-[#374151] text-xl">Name</legend>
                      <input  defaultValue={name} name='name' placeholder='Update Enter coffee name' className='  px-6 py-4   rounded-sm   bg-gray-100 ' type="text" />
                  </fieldset>
                 <fieldset className="fieldset mt-2">
                     <legend className="fieldset-legend text-[#374151] text-xl">price</legend>
                      <input defaultValue={price} name='price' placeholder='Update Enter coffee price' className='  px-6 py-4  rounded-sm   bg-gray-100 '  type='number'/>
                  </fieldset>
                 <fieldset className="fieldset mt-2">
                     <legend className="fieldset-legend text-[#374151] text-xl">Supplier</legend>
                      <input defaultValue={supplier} name='supplier' placeholder='Update Enter coffee supplier' className='  px-6 py-4  rounded-sm   bg-gray-100 ' type="text" />
                  </fieldset>
                 <fieldset className="fieldset mt-2">
                     <legend className="fieldset-legend text-[#374151] text-xl">Taste</legend>
                      <input defaultValue={taste} name='taste' placeholder='Update Enter coffee taste' className='  px-6 py-4  rounded-sm   bg-gray-100 ' type="text" />
                  </fieldset>
                 <fieldset className="fieldset mt-2">
                     <legend className="fieldset-legend text-[#374151] text-xl">Category</legend>
                      <input defaultValue={category}  name='category' placeholder='Update Enter coffee category' className='  px-6 py-4  rounded-sm   bg-gray-100 ' type="text" />
                  </fieldset>
                 <fieldset className="fieldset mt-2">
                     <legend className="fieldset-legend text-[#374151] text-xl">Details</legend>
                      <input defaultValue={details} name='details' placeholder='Update Enter coffee details' className='  px-6 py-4  rounded-sm   bg-gray-100 ' type="text" />
                  </fieldset>
           </div>
                   <fieldset className="fieldset mt-2">
                     <legend className="fieldset-legend text-[#374151] text-xl">Photo</legend>
                      <input defaultValue={photo} name='photo' placeholder='Update Photo URL' className='  px-6 py-4  rounded-sm   bg-gray-100 ' type="text" />
                  </fieldset>
                   <input className='mt-4  px-6 py-4  w-full  rounded-sm border-2 border-[#331A15]   bg-[#D2B48C] ' type="submit" value="Update Coffee Details"   />
             </form>
       
    );
};

export default Update;