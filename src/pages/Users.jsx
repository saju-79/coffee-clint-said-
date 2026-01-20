import React, { useState } from 'react';
import {   Link, useLoaderData } from 'react-router';
import User from './User';
import { IoArrowBackOutline } from 'react-icons/io5';

const Users = () => {
    const infos =  useLoaderData()
    const [userInfo ,  setUserLifo]= useState(infos);
    
    return (
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
                  <Link to="/" className='text-2xl  font-bold text-[#374151] p-3 ml-4 flex gap-1 items-center my-5 '> <IoArrowBackOutline /> Back to home</Link>
	<h2 className="mb-4 text-2xl font-semibold leading-tight text-center items-center">Total User <span className='font-bold text-red-500 '>{userInfo.length}</span></h2>
	<div className="overflow-x-auto">
		<table className="w-full p-6 text-xs text-left whitespace-nowrap">
			<colgroup>
				<col className="w-5" />
				<col />
				<col />
				<col />
				<col />
				<col />
				<col className="w-5" />
			</colgroup>
			<thead>
				<tr className="dark:bg-gray-300 text-xl">
					<th className="p-3">Total User</th>
					<th className="p-3">User photo </th>
					<th className="p-3">Name</th>
					<th className="p-3">Email</th>
					<th className="p-3">Phone Number</th>
					<th className="p-3">Address</th>
					<th className="p-3">lastSignInTime</th>
					<th className="p-3 text-end">
						 Edit
					</th>
				</tr>
			</thead>
			<tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
	            {
                  userInfo.map((data ,index)=> <User key={data._id} data={data} index={index}></User>)
                }
				
			</tbody>
			
		</table>
	</div>
</div>
            
         
    );
};

export default Users;