import Home from './pages/Home.jsx';
import Header from './components/Header.jsx';
import { FacebookInit } from './components/FacebookInit.jsx';

function App() {
	FacebookInit();

	return (
		<div className='container mx-auto pt-5'>
			<Header />
			<Home />
		</div>
	);
}

export default App;
