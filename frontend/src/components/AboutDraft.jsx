import React from 'react';
import CoderDojo from '../imgs/CoderDojo.svg';
import LearnMyWay from '../imgs/lmw.png';
import DistanceLearning from '../imgs/distanceLearning.png';
import Udemy from '../imgs/udemy.svg';

const Draft = () => {
	const dojoStyle = {
		height: '25px',
		position: 'relative',
		top: '5px',
		margin: '0 5px 0 5px',
	};

	const lmwStyle = {
		height: '40px',
		position: 'relative',
		top: '12px',
		margin: '0 3px 0 5px',
	};

	const distanceLearningStyle = {
		height: '40px',
		position: 'relative',
		top: '12px',
		margin: '0 2px 0 5px',
	};

	const udemyStyle = {
		height: '25px',
		position: 'relative',
		top: '7px',
		margin: '0 3px 0 5px',
	};

	const linkStyle = {
		textDecoration: 'none',
		color: 'white',
	};

	return (
		<>
			<p className="aboutme__text has-dropcap">
				Michael Whyte is a self taught M.E.R.N. stack devleoper based in
				Lancaster, England. Michael works as a library assistant and is
				currently seeking employment opportunities in web development.{' '}
			</p>
			<p className="aboutme__text">
				{' '}
				Driven by a love of learning, his interest in web development is a
				natural concomitant and extension of his work with the Library Service.
				With an Arts and Humanities background (MA Critial Theory, BA(Hons) Film
				& Media Studies), and having little previous knowledge of STEM subjects, web
				development emerged straight out of leftfield. Here is the story of how this came to fruition.
			</p>
			<p className="aboutme__text">
				Part of the mission statement of public libraries is to promote digital
				inclusion. Since 2018 Michael has delivered digital support to students
				on the{' '}
				<span>
					<a
						href="https://www.learnmyway.com/"
						target="_blank"
						style={linkStyle}
						rel="noreferrer"
					>
						{' '}
						Learn My Way
						<img src={LearnMyWay} style={lmwStyle} alt="learn my way" />
					</a>
				</span>{' '}
				course. To deliver the best possible educative experience and enhance
				his own digital skills, in 2019 Michael completed the Essential Digital
				Skills Level Two with the
				<span>
					<a
						href="https://www.distancelearningcentre.com/index.php"
						target="_blank"
						style={linkStyle}
						rel="noreferrer"
					>
						{' '}
						Distance Learning Centre
						<img
							src={DistanceLearning}
							style={distanceLearningStyle}
							alt="distance learning centre"
						/>
					</a>
				</span>
				.
			</p>
			<p className="aboutme__text">
				A turning point came in early 2020 when Michael was asked to run a code
				club for kids. Having no experience with code he was hesitant but
				figured, if kids can code then I can too. With this in mind he borrowed
				a kids book on HTML and CSS and began experimenting. Struck by
				the power of HTML and CSS to produce online content, their syntactical composition and
				structural interrelation and the exchange
				between technology and creativity, he was hooked. The kids book became an adult
				book which became a web development bootcamp on{' '}
				<span>
					<a
						href="https://www.udemy.com/course/the-web-developer-bootcamp/"
						target="_blank"
						style={linkStyle}
						rel="noreferrer"
					>
						{' '}
						<img src={Udemy} style={udemyStyle} alt="udemy" />
					</a>
				</span>
				. Since September 2022 Michael has delivered a weekly{' '}
				<span>
					<a
						href="https://coderdojo.com/en"
						target="_blank"
						style={linkStyle}
						rel="noreferrer"
					>
						{' '}
			
						<img src={CoderDojo} style={dojoStyle} alt="coder dojo" />
					</a>
				</span>
				for kids aged 7 – 11.
			</p>
			<p className="aboutme__text">
				Beyond web development his interests are split between outdoor
				activities and more academic pursuits. Michael has completed 5 marathons
				and 6 half marathons up and down the UK. He enjoys travel and gained his advanced open water diving certificate in Indonesia. He
				recently walked the Cumbria Way and is currently training to swim the
				length of Coniston Water (5.25 miles). Michael enjoys learning French
				and reading French literature. His other reading interests include:
				history, politics, philosophy, critical theory, psychoanalysis, science
				fiction and classics.
			</p>
		</>
	);
};

export default Draft;
