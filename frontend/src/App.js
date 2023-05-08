import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Background from './components/Background';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Tech from './pages/Tech';
import Contact from './pages/Contact';

const App = () => {
	return (
		<div>
			<Router>
				<Background />
				<Navigation />
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/about" element={<About />}></Route>
					<Route path="/projects" element={<Projects />}></Route>
					<Route path="/tech" element={<Tech />}></Route>
					<Route path="/contact" element={<Contact />}></Route>
				</Routes>
			</Router>
		</div>
	);
};

export default App;
