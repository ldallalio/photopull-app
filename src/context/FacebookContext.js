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

	const downloadAll = () => {
		// Create and append a link
		let link = document.createElement('a');
		document.documentElement.append(link);

		const imgArr = document.querySelectorAll('img');
		for (let i = 0; i < imgArr.length; i++) {
			// Set the download name and href
			link.setAttribute('download', `image_${i}.jpg`);
			link.href = imgArr[i].src;
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
//  curl -o downloads/test/test.png https://scontent-atl3-2.xx.fbcdn.net/v/t1.6435-9/203532820_10226193125042481_3290169609411625924_n.jpg\?_nc_cat\=111\&ccb\=1-5\&_nc_sid\=453a68\&_nc_ohc\=0QcQMWUPzqsAX-9uU-8\&_nc_ht\=scontent-atl3-2.xx\&edm\=AIv30VUEAAAA\&oh\=00_AT--l2Bx48Qlanep0p4Thw_1K8jY_NoOzq3eVgvGrpd77Q\&oe\=62068231
