import Facebook from '../components/Facebook';
import { Login } from '../components/FacebookUserLogin';

function Home() {
	return (
		<div className='container mx-auto flex flex-col justify-center text-center'>
			<h1 className='text-3xl font-bold underline pb-5'>Hello world!</h1>

			<div className='flex flex-auto px-6'></div>
			<Login />
			<div className='my-100'>
				<Facebook />
			</div>
		</div>
	);
}

export default Home;
