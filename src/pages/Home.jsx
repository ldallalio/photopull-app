import Facebook from '../components/Facebook';

function Home() {
	return (
		<div className='container mx-auto flex flex-col justify-center text-center'>
			<h1 className='text-3xl font-bold underline pb-5'>Hello world!</h1>

			<div className='flex flex-auto px-6'></div>
			<Facebook />
		</div>
	);
}

export default Home;
