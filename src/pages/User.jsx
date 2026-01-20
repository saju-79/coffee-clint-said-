import React from 'react';

const User = ({data , index}) => {
    const{name , email , number ,aria ,url ,lastSignInTime}= data;
    return (
            	<tr>
					<td className="px-3 text-2xl  font-medium dark:text-gray-600">{index +1 }</td>
					<td className="px-3 py-2">
						<img className='w-15 h-15 rounded-full' src={url} alt="" />
					</td>
					<td className="px-3 py-2">
                        <p>{name}</p>
						{/* <span>UI Designer</span> */}
						{/* <p className="dark:text-gray-600">Spirit Media</p> */}
					</td>
					<td className="px-3 py-2">
						<p>{email}</p>
					</td>
					<td className="px-3 py-2">
						<p>{number}</p>
					</td>
					<td className="px-3 py-2">
						<p>{aria}</p>
						{/* <p className="dark:text-gray-600">United Kingdom</p> */}
					</td>
					<td className="px-3 py-2">
						<p>{lastSignInTime}</p>
						{/* <p className="dark:text-gray-600">United Kingdom</p> */}
					</td>
					<td className="px-3 py-2 text-end">
						<button type="button" title="Open details" className="p-1 rounded-full dark:text-gray-400 hover:dark:bg-gray-300 focus:dark:bg-gray-300">
							<svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
								<path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
							</svg>
						</button>
					</td>
				</tr>
    );
};

export default User;