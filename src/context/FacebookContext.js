import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const FacebookContext = createContext();

export const FacebookProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userResponse, setUserResponse] = useState({});
	const [photos, setPhotos] = useState([]);
	const [userToken, setUserToken] = useState({});

	const myAlbumArr = [];
	const photoIDarr = [];

	const getData = () => {
		axios
			.request(options)
			.then(function (response) {
				const albums = response.data.albums;
				const myAlbums = () => {
					for (let i = 0; i < albums.data.length; i++) {
						myAlbumArr.push(albums.data[i].photos.data);

						myAlbumArr[i].map((x) => {
							return photoIDarr.push(x.id);
						});
					}
				};

				myAlbums();
				setUserToken(userResponse.accessToken);

				setPhotos(
					photoIDarr.map((id) => {
						return id;
					}),
				);
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
				userToken,
			}}>
			{children}
		</FacebookContext.Provider>
	);
};
