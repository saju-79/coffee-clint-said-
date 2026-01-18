import React from 'react';
import Coffee from './Coffee';
 

const Coffees = () => {
    return (
         <div>
             <div className=" text-center justify-center items-center flex flex-col my-10 space-y-4"> 
                 <p className='text-sm text-[#1B1A1A]'> Follow Us Now</p>
                 <h1 className='text-4xl text-[#331A15] font-bold'>Follow on Instagram</h1>
                
             </div>
             <div className=" grid grid-cols-4 gap-5">
              <Coffee></Coffee>
             </div>
        </div>
    );
};

export default Coffees;