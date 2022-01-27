import Facebook from '../components/facebook/FacebookPhotos';
import { Login } from '../components/facebook/FacebookUserLogin';
import { useContext } from 'react';
import { FacebookContext } from '../context/FacebookContext';
import Logo from '../components/assets/images/photoPullLogo.png';

function Home() {
	const usingContext = useContext(FacebookContext);
	const loggedIn = usingContext.isLoggedIn;

	if (loggedIn === true) {
		return (
			<div className='hero rounded-xl shadow-2xl h-80'>
				<div className='hero-overlay bg-opacity-40'></div>
				<div className='hero-content flex-col align-center'>
					<div className='card max-w-md inline text-center shadow-2xl bg-neutral '>
						<figure className='h-72 '>
							<img src={Logo} alt='' srcset='' />
						</figure>
						<Login />
					</div>

					<Facebook />
				</div>
			</div>
		);
	} else if (loggedIn === false) {
		return (
			<div className='hero rounded-xl shadow-2xl h-80'>
				<div className='hero-overlay bg-opacity-40'></div>
				<div className='hero-content flex-col align-center'>
					<div className='card max-w-md inline text-center shadow-2xl bg-neutral '>
						<figure className='h-72 '>
							<img src={Logo} alt='' srcset='' />
						</figure>
						<div className='card-body text-xl max-w-xs mx-auto rounded-xl'>
							Welcome to PhotoPull! Please login to download your photos!
						</div>
						<Login />
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
