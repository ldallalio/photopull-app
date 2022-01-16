import Facebook from '../components/facebook/FacebookPhotos';
import { Login } from '../components/facebook/FacebookUserLogin';
import { useContext } from 'react';
import { FacebookContext } from '../context/FacebookContext';

function Home() {
	const usingContext = useContext(FacebookContext);
	const loggedIn = usingContext.isLoggedIn;

	if (loggedIn === true) {
		return (
			<div className='hero rounded-xl shadow-2xl h-80'>
				<div className='hero-overlay bg-opacity-40'></div>
				<div className='hero-content flex-col align-center'>
					<h1 className='text-3xl font-bold underline pb-5'>Hello world!</h1>
					<Login />
					<Facebook />
				</div>
			</div>
		);
	} else if (loggedIn === false) {
		return (
			<div className='hero rounded-xl shadow-2xl h-80'>
				<div className='hero-overlay bg-opacity-40'></div>
				<div className='hero-content flex-col align-center'>
					<h1 className='text-3xl font-bold underline pb-5'>Hello world!</h1>
					<Login />
					<div className='justify-center'></div>
				</div>
			</div>
		);
	}
}

export default Home;
