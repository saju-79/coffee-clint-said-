import React from 'react';

const Navber = () => {
    return (
        <div  className='relative ' >
            {/* <img className='w-full h-30 object-center ' src="https://i.ibb.co.com/7xsBS01W/15.jpg" alt="" /> */}
            <div className=" flex justify-center items-center top-0  bg-[url('https://i.ibb.co.com/7xsBS01W/15.jpg')] h-30 text-center space-x-4 bg-cover bg-no-repeat py-4">
                 <img className='w-18 h-18 ' src="/logo1.png" alt="" />
                 <h1 className='text-5xl font-bold text-[#ffffff] text-center items-center '> Espresso Emporium</h1>
            </div>
             
        </div>
    );
};

export default Navber;