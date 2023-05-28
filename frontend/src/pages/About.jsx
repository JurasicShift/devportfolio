import React from 'react';
import './About.css';
import PageTitle from '../components/PageTitle';
import AboutMe from '../components/AboutMe';

const About = () => {
	return (
		<div>
			<div className="about__page">
				<PageTitle text="About me..." />
			</div>
			<div className="about__div">
				<AboutMe />
			</div>
		</div>
	);
};

export default About;
