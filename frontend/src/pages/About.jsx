import React from 'react';
import './About.css';
import PageTitle from '../components/PageTitle';
import AboutMe from '../components/AboutMe';
import Spinner from '../components/Spinner';
import useReadyState from '../hooks/useReadyState';

const About = () => {
	const [loading] = useReadyState();

	return (
		<>
			{loading ? (
				<Spinner height="100px" width="100px" lg={true} />
			) : (
				<>
					<div className="about__page">
						<PageTitle text="About me..." />
					</div>
					<div className="about__div">
						<AboutMe />
					</div>
				</>
			)}
		</>
	);
};

export default About;
