import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FacebookContext } from '../context/FacebookContext';
import { Login } from './facebook/FacebookUserLogin';

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
						<Link to='/' className='btn btn-ghost btn-sm rounded-btn' href='/'>
							Home
						</Link>
						<Link
							to='/about'
							className='btn btn-ghost btn-sm rounded-btn'
							href='/'>
							About
						</Link>
						<Link
							to='/contact'
							className='btn btn-ghost btn-sm rounded-btn'
							href='/'>
							Contact
						</Link>
					</div>
				</div>
				{userName ? (
					<div className='flex-none'>
						<h2 className='pr-10'>Welcome {userName} !</h2>
					</div>
				) : (
					<div className='flex-none'>
						<h2 className='pr-10'></h2>
					</div>
				)}
			</div>
		</div>
	);
}

export default Header;
