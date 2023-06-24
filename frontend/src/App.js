import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Background from './components/Background';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Tech from './pages/Tech';
import Contact from './pages/Contact';
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from './components/ErrorPage';
const prefix = '/michaelwhytewebdev';

const App = () => {
	
	return (
		<div>
			<ErrorBoundary FallbackComponent={ErrorFallback} >
			<Router>
				<Background />
				<Navigation />
				<Routes>
					<Route path={`${prefix}/`}  element={<Home />}></Route>
					<Route path={`${prefix}/about`} element={<About />}></Route>
					<Route path={`${prefix}/projects`}  element={<Projects />}></Route>
					<Route path={`${prefix}/tech`}  element={<Tech />}></Route>
					<Route path={`${prefix}/contact`} element={<Contact />}></Route>
					<Route path='*' element={<Navigate to={`${prefix}/`}  />} />
				</Routes>
			</Router>
			</ErrorBoundary>
		</div>
	);
};

export default App;
