import React from 'react';
import Navber from '../componet/Navber';
import { Outlet } from 'react-router';
import Fotter from '../componet/Fotter';
import Baner from '../componet/Baner';
import Info from '../componet/Info';

const Root = () => {
    return (
        <div className=''>
              {/* hader */}
            <section>
                 <Navber></Navber>
                 <Baner></Baner>
                  <Info></Info>
            </section>
            {/* main section  */}
            <section className='w-10/12 mx-auto p-2 '>
                <Outlet></Outlet>
            </section>
            {/* footer */}
            <section className='bg-gray-300 '>
                <Fotter></Fotter>
                 <div  className='relative ' >
            {/* <img className='w-full h-30 object-center ' src="https://i.ibb.co.com/7xsBS01W/15.jpg" alt="" /> */}
            <div className=" flex justify-center items-center top-0  bg-[url('https://i.ibb.co.com/7xsBS01W/15.jpg')] h-15 text-center space-x-4 bg-cover bg-no-repeat py-4">
                
                 <h1 className='text-lg font-bold text-[#ffffff] text-center items-center '> Copyright Espresso Emporium ! All Rights Reserved</h1>
            </div>
             
        </div>
            </section>
        </div>
    );
};

export default Root;