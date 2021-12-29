import { useState } from 'react';
import axios from 'axios';

const FACEBOOK_TOKEN = process.env.REACT_APP_FACEBOOK_TOKEN;
console.log(FACEBOOK_TOKEN);

const options = {
	method: 'POST',
	url: `https://graph.facebook.com/v12.0/me?fields=id%2Cname%2Cphotos%7Bpicture%7D&access_token=${FACEBOOK_TOKEN}`,
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
	},
	/* data: { access_token: `513045333146876` }, */
};

function Facebook() {
	const [photos, setPhotos] = useState([]);
	const getData = () => {
		axios
			.request(options)
			.then(function (response) {
				const data = response.data.photos.data;
				setPhotos(
					data.map((image) => {
						return image.picture;
					}),
				);
			})
			.catch(function (error) {
				console.error(error);
			});
	};

	//console.log(photos.length);
	//console.table(photos);

	const photoList = () => {
		/* for (let i = 0; i < photos.length; i++) {
			console.log(photos[i]);
			<img className='img image-full' src={photos[i]} />;
		} */
		/* photos.forEach((photo) => {
			console.log(photo);
			<img src={photo} />;
		}); */

		<li>
			{photos.map((photo) => {
				return <img src={photo} />;
			})}
		</li>;
	};

	return (
		<div>
			<button
				onClick={getData}
				className='inline-block px-4 py-3 text-sm font-semibold text-center text-white uppercase transition duration-200 ease-in-out bg-indigo-500 rounded-md cursor-pointer hover:bg-indigo-600'>
				Tailwind Button
			</button>
			<div className='flex flex-row mx-auto'>
				<ul>
					<li>{photoList()}</li>
				</ul>
			</div>
		</div>
	);
}

export default Facebook;
