import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// FacebookContext
// This is the context that will be used by the FacebookProvider
// It will be used to store the user's facebook data
export const FacebookContext = createContext();

export const FacebookProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userResponse, setUserResponse] = useState({});
	const [photos, setPhotos] = useState([]);
	const [userToken, setUserToken] = useState(null);
	const [photoGrid, setPhotoGrid] = useState(false);
	const [userInfo, setUserInfo] = useState({});

	const myAlbumArr = [];
	const photoIDarr = [];

	// This function will be used to get the user's facebook data
	const getUserInfo = async () => {
		return new Promise((resolve, reject) => {
			axios
				.get('https://graph.facebook.com/me', {
					params: {
						fields: 'id,name,email',
						access_token: userToken,
					},
				})
				.then((res) => {
					resolve(res.data);
					setUserInfo(res.data);
				})
				.catch((err) => {
					reject(err);
				});
		});
	};
	// This function will get the user's photos
	const getData = async () => {
		axios
			.request(options1)
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
				setPhotoGrid(true);
			})
			.catch(function (error) {
				console.error(error);
			});
	};
	//This function will check to see if the user is logged in
	const checkAuth = useEffect(() => {
		setTimeout(() => {
			window.FB.getLoginStatus(function (response) {
				setUserResponse(response.authResponse);
				setUserToken(response.authResponse.accessToken);
				if (!response.authResponse) {
					setIsLoggedIn(false);
				} else if (response.authResponse) {
					setIsLoggedIn(true);
					getUserInfo();
				}
			});
		}, 1000);
	}, [isLoggedIn]);

	const options1 = {
		method: 'GET',
		url: `https://graph.facebook.com/v12.0/me?fields=albums.fields(photos.fields(source))&access_token=${userToken}`,
		headers: {
			'content-type': 'application/x-www-form-urlencoded',
		},
	};

	//Download all photos

	const downloadAll = async () => {
		// Create and append a link
		let link = document.createElement('a');
		document.documentElement.append(link);

		const imgArr = document.querySelectorAll('img');
		for (let i = 0; i < imgArr.length; i++) {
			await fetch(imgArr[i].src)
				.then((res) => res.blob()) // Gets the response and returns it as a blob
				.then((blob) => {
					let objectURL = URL.createObjectURL(blob);

					// Set the download name and href
					link.setAttribute('download', `image_${i}.jpg`);
					link.href = objectURL;

					// Auto click the link
					link.click();
				});
		}
	};

	return (
		<FacebookContext.Provider
			value={{
				downloadAll,
				isLoggedIn,
				userResponse,
				checkAuth,
				options1,
				getData,
				getUserInfo,
				userInfo,
				photos,
				userToken,
				photoGrid,
			}}>
			{children}
		</FacebookContext.Provider>
	);
};
