import React, { use } from 'react';
import { AuthContext } from '../contaxAPI/Contrax';
import { Link } from 'react-router';
 
 

const Navber = () => {
    const {user ,  logout} = use(AuthContext);
    console.log(user)
    const handelLogOut =()=>{
        logout()
        .then(()=>{

        })
        .catch(erre=>{
            console.log(erre)
        })
    }
    return (
        <div  className='relative ' >
            {/* <img className='w-full h-30 object-center ' src="https://i.ibb.co.com/7xsBS01W/15.jpg" alt="" /> */}
            <div className=" flex justify-between items-center top-0  bg-[url('https://i.ibb.co.com/7xsBS01W/15.jpg')] h-30 text-center space-x-4 bg-cover bg-no-repeat py-4">
                <div className=""></div>
                <div className=" flex gap-2 items-center">
                     <img className='w-18 h-18 items-center' src="/logo1.png" alt="" />
                 <h1 className='text-5xl font-bold text-[#ffffff] text-center items-center '> Espresso Emporium</h1>
                </div>
                <div className="flex gap-2 items-center">
                    <img className=' w-20 h-20 rounded-full' src={user ?  user.photoURL : "https://i.ibb.co.com/hR0Rfq0j/user.png"} alt="" />
                     <Link to='/login' className='px-6 py-3 rounded-lg shadow-sm bg-[#E3B577] mr-4 border-2 border-[#331A15] text-xl font-bold text-[#ffffff]' > {user ?  <button onClick={handelLogOut}  >LogOut </button> :   <button > Login </button>} </Link>
                </div>

            </div>
             
        </div>
    );
};

export default Navber;