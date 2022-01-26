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
			// 			<div class="card text-center shadow-2xl">
			//   <figure class="px-10 pt-10">
			//     <img src="https://picsum.photos/id/1005/400/250" class="rounded-xl">
			//   </figure>
			//   <div class="card-body">
			//     <h2 class="card-title">shadow, center, padding</h2>
			//     <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p>
			//     <div class="justify-center card-actions">
			//       <button class="btn btn-outline btn-accent">More info</button>
			//     </div>
			//   </div>
			// </div>
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
						<div className='card-body max-w-xs mx-auto rounded-xl'>
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
