import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Header from './components/Header.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import { FacebookInit } from './components/facebook/FacebookInit.jsx';
import { FacebookProvider } from './context/FacebookContext';

function App() {
	FacebookInit();

	return (
		<FacebookProvider>
			<Router>
				<div className='container mx-auto pt-5'>
					<Header />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/contact' element={<Contact />} />
					</Routes>
				</div>
			</Router>
		</FacebookProvider>
	);
}

export default App;
