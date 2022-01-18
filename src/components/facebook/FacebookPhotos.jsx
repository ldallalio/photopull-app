import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { FacebookContext } from '../../context/FacebookContext';

function Facebook() {
	const usingContext = useContext(FacebookContext);
	if (!usingContext.photoGrid) {
		return (
			<button onClick={usingContext.getData} className='btn btn-primary mb-10'>
				View Photos
			</button>
		);
	} else {
		return (
			<div className='mx-auto'>
				<div className=' mt-10 '>
					<button
						className='flex btn btn-accent mb-10 mx-auto'
						onClick={usingContext.downloadAll}>
						Download Photos Now
					</button>
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
				</div>
			</div>
		);
	}
}

export default Facebook;
