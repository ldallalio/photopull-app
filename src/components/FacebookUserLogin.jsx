import { data } from 'autoprefixer';
import { useState, useEffect } from 'react';
import FacebookInit from './FacebookInit';

export function Login() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userResponse, setUserResponse] = useState({});

	const logOut = () => {
		window.FB.logout();
		window.location.reload();
	};

	const logIn = () => {
		window.FB.login(() => {
			window.location.reload();
		});
	};

	useEffect(() => {
		setTimeout(() => {
			window.FB.getLoginStatus(function (response) {
				setUserResponse(response.authResponse);
				if (!response.authResponse) {
					setIsLoggedIn(false);
				} else if (response.authResponse) {
					setIsLoggedIn(true);
				}
			});
		}, 1000);
	}, [isLoggedIn]);
	if (!isLoggedIn) {
		return (
			<div id='flex flex-row justify-center pb-100 fb-root'>
				<button className='btn btn-round btn-lg' onClick={logIn}>
					Login
				</button>
			</div>
		);
	} else {
		return (
			<div id='flex flex-row justify-center pb-100 fb-root'>
				<button className='btn btn-round btn-lg' onClick={logOut}>
					Logout
				</button>
			</div>
		);
	}
}
