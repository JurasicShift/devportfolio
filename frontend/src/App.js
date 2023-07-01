import React from 'react';
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
const prefix = '/michaelwhytewebdev';

const App = () => {
	return (
		<>
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
		</>
	);
};

export default App;
