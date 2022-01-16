import { useContext } from 'react';
import { FacebookContext } from '../context/FacebookContext';

function Header() {
	const { userInfo } = useContext(FacebookContext);
	const userName = userInfo.name;

	return (
		<div className='container mx-auto'>
			<div className='navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box'>
				<div className='flex-none px-2 mx-2'>
					<span className='text-lg font-bold'>photoPull</span>
				</div>
				<div className='flex-1 px-2 mx-2'>
					<div className='items-stretch hidden lg:flex'>
						<a className='btn btn-ghost btn-sm rounded-btn' href='/'>
							Home
						</a>
						<a className='btn btn-ghost btn-sm rounded-btn' href='/'>
							About
						</a>
						<a className='btn btn-ghost btn-sm rounded-btn' href='/'>
							Contact
						</a>
					</div>
				</div>
				{userInfo === !undefined}
				{
					<div className='flex-none'>
						<h2 className='pr-10'>Welcome {userName}</h2>
					</div>
				}
			</div>
		</div>
	);
}

export default Header;
