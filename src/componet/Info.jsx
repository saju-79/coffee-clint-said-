import React from 'react';

const Info = () => {
    return (
        <div className=" bg-[#ECEAE3] ">
            <div className='w-10/12 mx-auto  grid grid-cols-4 gap-6'>
            {/* first info */}
            <div className=" flex flex-col text-start space-y-1 p-3">
            <img className='w-20 h-20 rounded-sm p-2' src="https://i.ibb.co.com/nKt5CDb/1.png" alt="" />
            <h1 className='text-2xl text-[#331A15] font-medium'>Awesome Aroma</h1>
            <p className='text-sm text-[#1B1A1A]'>You will definitely be a fan of  the design & aroma <br /> of your coffee</p>
            </div>
            {/* secound info */}
            <div className=" flex flex-col text-start space-y-1 p-3">
            <img className='w-20 h-20 rounded-sm p-2' src="https://i.ibb.co.com/fdF4MLF9/2.png" alt="" />
            <h1 className='text-2xl text-[#331A15] font-medium'>High Quality</h1>
            <p className='text-sm text-[#1B1A1A]'>We served the coffee to you maintaining the <br /> best quality</p>
            </div>
            {/* third info */}
            <div className=" flex flex-col text-start space-y-1 p-3">
            <img className='w-20 h-20 rounded-sm p-2' src="https://i.ibb.co.com/F45GwWcj/3.png" alt="" />
            <h1 className='text-2xl text-[#331A15] font-medium'>Pure Grades</h1>
            <p className='text-sm text-[#1B1A1A]'>The coffee is made of the green coffee beans <br /> which  you will love</p>
            </div>
            {/* fourth info */}
            <div className=" flex flex-col text-start space-y-1 p-3">
            <img className='w-20 h-20 rounded-sm p-2' src="https://i.ibb.co.com/B2JhNFzD/4.png" alt="" />
            <h1 className='text-2xl text-[#331A15] font-medium'>Proper Roasting</h1>
            <p className='text-sm text-[#1B1A1A]'>Your coffee is brewed by first roasting the green <br /> coffee beans</p>
            </div>
           
        </div>
        </div>
    );
};

export default Info;