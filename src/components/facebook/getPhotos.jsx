import { Login } from './FacebookUserLogin';

function getPhotos() {
	return (
		<button
			onClick={getData}
			className='inline-block px-4 py-3 text-sm font-semibold text-center text-white uppercase transition duration-200 ease-in-out bg-indigo-500 rounded-md cursor-pointer hover:bg-indigo-600'>
			Tailwind Button
		</button>
	);
}

export default getPhotos;
