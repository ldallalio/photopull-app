import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { FacebookContext } from '../../context/FacebookContext';

function Facebook() {
	const usingContext = useContext(FacebookContext);
	// console.log(usingContext.photos);
	if (!usingContext.photoGrid) {
		return (
			<button onClick={usingContext.getData} className='btn btn-primary'>
				View Photos
			</button>
		);
	} else {
		return (
			<div className='mx-auto'>
				<div className='mt-10'>
					<ul className='grid grid-cols-5 gap-3 mb-40	'>
						<button
							className='btn btn-accent'
							onClick={usingContext.downloadAll}>
							Download Now
						</button>

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
