import React, { useState, useEffect } from 'react';
import './AboutMe.css';
import Draft from './AboutDraft';
import AboutPhoto from './Photo';
import ChatPhoto from '../imgs/chat3.png';
import WordCloud from './TagCloud';
import Spinner from './Spinner';
import {ChatBtns, OriginBtn} from './AboutBtns';
import {trimmer, parseCloud, parseParagraphs} from '../utilities/parsers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import aboutString from '../data/htmlString';
const baseUrl = 'http://localhost:5000';

const AboutMe = () => {
	const [loading, setLoading] = useState(false);
	const [aboutTitle, setAboutTitle] = useState('');
	const [text, setText] = useState('');
	const [chat, setChat] = useState(false);
	const [cloud, setCloud] = useState(false);
	const [theme, setTheme] = useState(false);

	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	}, [text]);


	const toastOptions = {
		position: 'top-right',
		autoClose: 2500,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'colored',
	};

	const handleOriginal = () => {
		setText('');
		setChat(false);
		setCloud(false);
		setTheme(false);
	};

	const handleRewrite = async e => {
		e.preventDefault();
		const btnValue = e.target.value;
	
		if (btnValue === 'Themes') {
			setTheme(true);
		} else {
			setTheme(false);

		}
		
			try {
			setLoading(true);
			toast.info('Awaiting Response!!', toastOptions);

			const response = await fetch(`${baseUrl}/rewrite`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ searchTerm: btnValue, text: aboutString }),
			});

			if (!response.ok) {
				toast.warn('ChatGPT Not Resonding!!', toastOptions);
			}

			const data = await response.json();

			setTimeout(() => {
	
				if (btnValue === 'Cloud') {
					setCloud(true);
					const trimmed = trimmer(data.newText, ' ', true);
					setText(trimmed);
				
				} else {
					if(cloud) setCloud(false);
					const trimmed = trimmer(data.newText, '\n', false);
					setText(trimmed);
				}
				setAboutTitle(btnValue);
				setChat(true);
				setLoading(false);
			}, 500);
		} catch (error) {
			toast.error('An error occurred while fetching data');
			setLoading(false);
		}
	};


	const chatStyle = {
		height: '25px',
		position: 'relative',
		top: '7px',
		margin: '0 0 0 2px',
	};

	const divStyle = {
		display: 'inline',
	};

	return (
		<div className="aboutme">
			<div className="aboutme__div">
				{
					chat ? <div className="about__title">{aboutTitle}</div> : <AboutPhoto />
				}
				
				{
					!chat ? < Draft /> : cloud ? < WordCloud tags={parseCloud(text)} /> : parseParagraphs(text, theme)
					
				}
				{
					chat ? < OriginBtn cloud={cloud} handler={handleOriginal}/> : null
				}
			</div>
			<div className="chat">
				<div className="chat__div">
					<div className="chat__spinner">
						{loading && <Spinner />}
					</div>
					<div className="chat__text">
						Use{' '}
						<span>
							<div style={divStyle}>
								<img src={ChatPhoto} style={chatStyle} alt="chat g p t" />
							</div>
						</span>{' '}
						ChatGPT to summarize, or organise by theme or word cloud.
					</div>
					<div className="chat__form">
						<ChatBtns handler={handleRewrite} />
					</div>
				</div>
			</div>
			<ToastContainer />
		</div>
	);
};

export default AboutMe;
