import Facebook from '../components/facebook/FacebookPhotos';
import { Login } from '../components/facebook/FacebookUserLogin';
import { useContext } from 'react';
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
					<a
						id='download_image'
						href='/'
						download='https://scontent-atl3-2.xx.fbcdn.net/v/t1.18169-9/13697208_10210260206649479_1066263393908303929_n.jpg'>
						Download 2
					</a>
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
// var images = document.getElementsByTagName('img');
// var i = 0;

// setInterval(function () {
// 	if (images.length > i) {
// 		window.saveAs(images[i].src, `myImages ${i}`);
// 		i++;
// 		// window.saveAs(images[i]);
// 	}
// }, 1000);
