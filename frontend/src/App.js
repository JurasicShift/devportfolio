import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Background from './components/Utilities/Background';
import Navigation from './components/Nav/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Tech from './pages/Tech';
import Contact from './pages/Contact';
import ErrorBoundary from './components/Errors/ErrorBoundary';
import { NotFound } from './components/Errors/ErrorPage';

const App = () => {
	return (
		<>
			<Router>
				<ErrorBoundary>
					<Background />
					<Navigation />
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/about" element={<About />}></Route>
						<Route path="/projects" element={<Projects />}></Route>
						<Route path="/tech" element={<Tech />}></Route>
						<Route path="/contact" element={<Contact />}></Route>
						<Route path="*" element={<NotFound />} />
					</Routes>
				</ErrorBoundary>
			</Router>
		</>
	);
};

export default App;
