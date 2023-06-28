import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Background from './components/Background';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Tech from './pages/Tech';
import Contact from './pages/Contact';
import ErrorBoundary from './components/ErrorBoundary';
import { NotFound } from './components/ErrorPage';
import Spinner from './components/Spinner';
const prefix = '/michaelwhytewebdev';

const App = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const delay = 2000;
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, delay);
		return () => clearTimeout(timer);
	}, []);

	const spinStyles = {
		height: '100vh',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	};

	return (
		<div>
			{isLoading ? (
				<div style={spinStyles}>
					<Spinner height="100px" width="100px" lg={true} />
				</div>
			) : (
				<Router>
					<ErrorBoundary>
						<Background />
						<Navigation />
						<Routes>
							<Route path={`/`} element={<Home />}></Route>
							<Route path={`${prefix}/`} element={<Home />}></Route>
							<Route path={`${prefix}/about`} element={<About />}></Route>
							<Route path={`${prefix}/projects`} element={<Projects />}></Route>
							<Route path={`${prefix}/tech`} element={<Tech />}></Route>
							<Route path={`${prefix}/contact`} element={<Contact />}></Route>
							<Route path="*" element={<NotFound />} />
						</Routes>
					</ErrorBoundary>
				</Router>
			)}
		</div>
	);
};

export default App;
