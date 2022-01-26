import { data } from 'autoprefixer';
import { useState, useEffect, useContext } from 'react';
import FacebookInit from './FacebookInit';
import { FacebookContext } from '../../context/FacebookContext';

export function Login() {
	const usingContext = useContext(FacebookContext);

	const logOut = () => {
		window.FB.logout();
		window.location.reload();
	};

	const logIn = () => {
		window.FB.login(
			(response) => {
				window.location.reload();
			},
			{
				scope: 'email, user_photos, public_profile',
				return_scope: true,
			},
		);
	};

	if (usingContext.isLoggedIn === false) {
		return (
			<div id='flex flex-row justify-center pb-100 fb-root'>
				<button className='btn btn-round btn-lg facebook mb-8' onClick={logIn}>
					Login with Facebook
				</button>
			</div>
		);
	} else {
		return (
			<div id='flex flex-row justify-center pb-100 fb-root'>
				<button className='btn btn-round btn-lg facebook mb-8' onClick={logOut}>
					Logout
				</button>
			</div>
		);
	}
}
