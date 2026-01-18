import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaYoutube } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const Fotter = () => {
    return (
        <div className='w-10/12 mx-auto my-10 py-8 '>
                <div className="flex justify-between">
                    <img className='w-30 h-30' src="/logo1.png" alt="" />
                    <p></p>
                </div>
              <div className=" flex justify-between md:justify-between lg:justify-between gap-5  ">
                 {/* lnik section */}
            <div className=" text-start  w-3/4 p-2 flex  flex-col gap-3   ">
                   <h1 className= 'text-start text-5xl font-bold text-[#331A15]   items-center '> Espresso Emporium</h1>
                   <p  className='text-lg font-normal  '>
                    Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.
                   </p>
                  <div className="flex gap-5 my-3">
                    <FaYoutube size={36} />
                    <FaLinkedin size={36} />
                    <FaInstagram size={36} />
                    <FaFacebook size={36} />

                  </div>
                  <h1 className='text-5xl text-start font-bold text-[#331A15] my-4   items-center '> Get in Touch</h1>
                  <div className="flex items-center gap-3 p-2 text-2xl">
                    <p className='text-[#331A15] font-medium '><FaPhone /></p>
                    <h1 className='text-[#331A15] font-medium '>+8801307616837</h1>
                  </div>
                  <div className="flex items-center gap-3 p-2 text-2xl">
                    <p className='text-[#331A15] font-medium '><MdEmail /></p>
                    <h1 className='text-[#331A15] font-medium '>saju98622@gmail.com</h1>
                  </div>
                  <div className="flex items-center p-2 gap-3 text-2xl">
                    <p className='text-[#331A15] font-medium '><FaLocationDot /></p>
                    <h1 className='text-[#331A15] font-medium '> Kaderabad Housing ,Mohammadpur , Dhaka</h1>
                  </div>

                   
            </div>
            {/* from section  */}
            <div className="w-1/4 flex flex-col p-2">
                   <h1 className= 'text-start text-5xl font-bold text-[#331A15]   items-center space-y-4 '> Connect with Us</h1>

             {/* input fild */}

               <input placeholder='Name' className=' w-full px-6 py-4 mt-4   bg-gray-100 ' type="text" />
               <input placeholder='Email' className=' w-full px-6 py-4 mt-4  bg-gray-100 ' type="text" />
               <textarea  className="textarea h-36  w-full px-6 py-4 mt-4  bg-gray-100 " placeholder="Message"></textarea>
               <input  className=' px-6 py-3 mt-4 btn bg-[#331A15] text-gray-100 font-bold text-sm '  type="submit"  value="Send Message" />
            
            </div>
              </div>
               
        </div>
    );
};

export default Fotter;