import Facebook from '../components/facebook/FacebookPhotos';
import { Login } from '../components/facebook/FacebookUserLogin';
import { useState, useEffect, useContext } from 'react';
import { FacebookContext } from '../context/FacebookContext';

function Home() {
	const usingContext = useContext(FacebookContext);
	const loggedIn = usingContext.isLoggedIn;

	if (loggedIn === true) {
		return (
			<div className='container mx-auto flex flex-col justify-center text-center'>
				<h1 className='text-3xl font-bold underline pb-5'>Hello world!</h1>
				<div className='flex flex-auto px-6'></div>
				<Login />
				<div className='my-100'>
					<Facebook />
				</div>
			</div>
		);
	} else if (loggedIn === false) {
		return (
			<div>
				<Login />
			</div>
		);
	}
}

export default Home;
