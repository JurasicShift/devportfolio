import React from 'react';
import './About.css';
import PageTitle from '../components/Utilities/PageTitle';
import AboutMe from '../components/About/AboutMe';
import Spinner from '../components/Utilities/Spinner';
import useReadyState from '../hooks/useReadyState';
import { titleTab } from '../utilities/titleFn';

const About = () => {
	const [loading] = useReadyState();
	
	titleTab('About');

	return (
		<>
			{loading ? (
				<Spinner height="100px" width="100px" lg={true} />
			) : (
				<>
					<div className="about__page">
						<PageTitle text="About me..." />
					</div>
					<div className='about__div'>
						<AboutMe />
					</div>
				</>
			)}
		</>
	);
};

export default About;
