import Home from './pages/Home.jsx';
import Header from './components/Header.jsx';
import { FacebookInit } from './components/facebook/FacebookInit.jsx';
import { FacebookProvider } from './context/FacebookContext';

function App() {
	FacebookInit();

	return (
		<div className='container mx-auto pt-5'>
			<FacebookProvider>
				<Header />
				<Home />
			</FacebookProvider>
		</div>
	);
}

export default App;
