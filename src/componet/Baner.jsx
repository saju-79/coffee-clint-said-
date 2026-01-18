import React from 'react';

const Baner = () => {
    return (
        <div className='bg-[url("https://i.ibb.co.com/1twDXpMp/6.jpg")] bg-cover bg-no-repeat h-150 flex  object-cover bg-fixed'>
           <div className="w-1/2   flex flex-col text-start p-5 md:p-10   justify-center  space-y-4">
                <h1 className='text-5xl font-bold text-[#ffffff] text-center  items-center '>Would you like a Cup of Delicious Coffee?</h1>
                <p className='text-xl font-normal text-start items-center ml-33 text-[#ffffff]'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
               <button className='bg-[#8B4513] text-white w-2/12 ml-33 justify-start items-start  text-center px-6 py-3 rounded-lg hover:bg-[#654321] '>Order Now</button>
           </div>
           <div className="w-1/2"></div>
        </div>
    );
};

export default Baner;