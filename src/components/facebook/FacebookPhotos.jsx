import { useState, useContext } from 'react';
import axios from 'axios';
import { FacebookContext } from '../../context/FacebookContext';

function Facebook() {
	const usingContext = useContext(FacebookContext);
	// console.log(usingContext.photos);
	return (
		<div className='mx-auto'>
			<div className='mt-40'>
				<ul className='grid grid-cols-5 gap-3 mb-40	'>
					{usingContext.photos.map((photo, i) => {
						const images = `https://graph.facebook.com/v12.0/${photo}/picture?type=normal&access_token=${usingContext.userToken}`;
						console.log();
						return (
							<li key={i} className='card card-normal shadow-2xl'>
								<img src={images} key={i} alt='' className='img' />
							</li>
						);
					})}
				</ul>
				<button
					onClick={usingContext.getData}
					className='inline-block px-4 py-3 text-sm font-semibold text-center text-white uppercase transition duration-200 ease-in-out bg-indigo-500 rounded-md cursor-pointer hover:bg-indigo-600'>
					Tailwind Button
				</button>
			</div>
		</div>
	);
}

export default Facebook;
