import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const FacebookContext = createContext();

export const FacebookProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userResponse, setUserResponse] = useState({});
	const [photos, setPhotos] = useState([]);
	const [photosID, setPhotosID] = useState([]);
	const [userToken, setUserToken] = useState({});

	const getData = () => {
		axios
			.request(options)
			.then(function (response) {
				const data = response.data.albums.data[0].photos.data;
				console.log(data);
				// const data = response.data.albums.data;
				const newData = data.map(function (obj) {
					return obj.id;
				});

				setPhotosID(newData);
				setUserToken(userResponse.accessToken);
				// console.log(newData);

				setPhotos(
					data.map((image) => {
						return image.id;
					}),
				);
				window.FB.api('/me/permissions', (response) => {
					console.log(response);
				});
			})
			.catch(function (error) {
				console.error(error);
			});
	};
	const checkAuth = useEffect(() => {
		setTimeout(() => {
			window.FB.getLoginStatus(function (response) {
				setUserResponse(response.authResponse);
				setUserToken(response.authResponse.accessToken);
				if (!response.authResponse) {
					setIsLoggedIn(false);
				} else if (response.authResponse) {
					setIsLoggedIn(true);
				}
			});
		}, 1000);
	}, [isLoggedIn]);
	const options = {
		method: 'GET',
		url: `https://graph.facebook.com/v12.0/me?fields=albums.fields(photos.fields(source))&access_token=${userToken}`,
		// url: `https://graph.facebook.com/v12.0/me/photos/uploaded?&access_token=${userToken}`,
		headers: {
			'content-type': 'application/x-www-form-urlencoded',
		},
	};

	return (
		<FacebookContext.Provider
			value={{
				isLoggedIn,
				userResponse,
				checkAuth,
				options,
				getData,
				photos,
				photosID,
				userToken,
			}}>
			{children}
		</FacebookContext.Provider>
	);
};
