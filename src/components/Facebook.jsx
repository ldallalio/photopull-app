import { useState } from 'react';
import axios from 'axios';

//Trying to get dot-env to work

const options = {
	method: 'POST',
	url: `https://graph.facebook.com/v12.0/me?fields=id%2Cname%2Cphotos%7Bpicture%7D&access_token=EAAHSnKzVZCPwBAA3kVr2XONlsnqJMdCQxxKnzNxBU88suSS0pbwJflIsfWDv8HtJZArMsfQAvjgkyQjF7C70HqfvpyT71mb3wtzifDVb9Mcw4elzO8nAVO5LHBMI4HtlBes1X89GqZAQbJNHbUZCZBvxRcHE8ZBwxLV3am2QaLseZCeZCt5MxC1VBFOdq3WvpsGTkHLJGFEKfiNJjDPXiKUHiN8M79frX7JQJckoSESFbSnanyTXDQqEmTjZAGcMsR00ZD`,
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
				console.log(response);
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

	return (
		<div className='mx-auto'>
			<button
				onClick={getData}
				className='inline-block px-4 py-3 text-sm font-semibold text-center text-white uppercase transition duration-200 ease-in-out bg-indigo-500 rounded-md cursor-pointer hover:bg-indigo-600'>
				Tailwind Button
			</button>
			<div className='grid grid-cols-4 gap-7 mt-40'>
				{photos.map((photo) => {
					console.log(photo);
					return (
						<ul>
							<li>
								<img src={photo} key={photo++} alt='' />
							</li>
						</ul>
					);
				})}
			</div>
		</div>
	);
}

export default Facebook;
