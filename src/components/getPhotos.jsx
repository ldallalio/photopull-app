import { Login } from './FacebookUserLogin';

function getPhotos() {
	return (
		<div id='flex flex-row justify-center pb-100 fb-root'>
			<button className='btn btn-round btn-lg' onClick={Login}>
				Login In
			</button>
		</div>
	);
}

export default getPhotos;
