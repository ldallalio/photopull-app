import React from 'react';
import Logo from '../components/assets/images/photoPullLogo.png';

function About() {
	return (
		<div className='hero  rounded-xl shadow-2xl h-80'>
			<div className='hero-overlay bg-opacity-40'></div>
			<div className='hero-content align-center'>
				<div className='card w-8/12 grid grid-cols-1  text-center bg-neutral '>
					<figure className='mx-auto max-h-72 max-w-lg'>
						<img src={Logo} alt='Logo' srcset='' className='w-10' />
					</figure>
					<div className='card-body w-10/12 mx-auto'>
						<p className='mb-4 text-xl '>
							PhotoPull is a web application that allows you to download your
							Facebook photos. It is designed to be as simple as possible and is
							designed to be used by anyone. It is not a paid service and is
							free to use.
							<p />
						</p>
						<p className='text-lg text-gray-400'>
							Version <span className='text-white'>1.0.0</span>
						</p>
						<p className='text-lg text-gray-400'>
							Designed and Developed By:
							<a
								className='text-white'
								href='https://twitter.com/DallalioWebDev'>
								Logan Dallalio || Dallalio Web Development
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
