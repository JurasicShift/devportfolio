import React, { useState, useEffect, useRef } from 'react';
import './AboutMe.css';
import AboutPhoto from './AboutPhoto';
import useViewport from '../hooks/useViewport';
import Icons from './Icons';
import CoderDojo from '../imgs/CoderDojo.svg';


const AboutMe = () => {
	const [divHeight, setDivHeight] = useState(0);
	const [divWidth, setDivWidth] = useState(0);
	const divRef = useRef(null);
	const { width } = useViewport();
	const breakpoint = 1200;
    const dojoStyle = {
        height: "25px",
        position: "relative",
        top: "5px",
        marginRight: "2px"
    }

	useEffect(() => {
		setDivHeight(divRef.current.clientHeight);
		setDivWidth(divRef.current.clientWidth);
	})

	return (
		<div className="aboutme">
			
			<div className="aboutme__div">
				{width < breakpoint ? <AboutPhoto height={divHeight} width={divWidth}/> : null}
				<p className="aboutme__text aboutme__text-margin">
					My interest in web development came straight out of leftfield; here is
					the story of how. Part of my role as a library assistant is to teach
					seniors basic IT skills. With this in mind I was asked if I would like
					to start a code club for kids. Coming from an arts and humanities
					background I knew nothing about coding, though I was keen to learn. If
					kids could do it then so could I! My first step was to get a kids book
					on HTML and CSS, my interest flourished and just prior to lockdown I
					began a web development bootcamp on Udemy. Three years later I have
					completed four substantial projects and my portfolio. I have been
					running a <span><a href="https://coderdojo.com/en" target="_blank" rel="noreferrer"><img src={CoderDojo} style={dojoStyle} alt="coder dojo" /></a></span> for kids age 7 – 11 since September 2022
				</p>

				<p className="aboutme__text ">
					Beyond web development I enjoy learning French and reading French
					literature, though my interest in reading also includes history,
					politics and critical theory. I love the outdoors and have complete 5
					marathons, 6 half marathons, I have an advanced open water diving certificate and I’m currently training to swim the
					length of Coniston Water.
					
				</p>
				{width < breakpoint ?<div className="aboutme__icons">
				 <Icons /> 
				</div>: null}
				<div className="aboutme__flexPhoto" ref={divRef}>
				{width > breakpoint ? <AboutPhoto height={divHeight} width={divWidth}/> : null}
				</div>
				
			</div>
			
		</div>
	);
};

export default AboutMe;
