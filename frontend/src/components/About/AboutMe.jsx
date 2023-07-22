import React, { useState, useEffect, useRef } from 'react';
import './AboutMe.css';
import Draft from './AboutDraft';
import AboutPhoto from './Photo';
import ChatPhoto from '../../imgs/chat3.png';
import WordCloud from './TagCloud';
import Spinner from '../Utilities/Spinner';
import ParsedParagraphs from './AboutParsedParagraphs';
import { ChatBtns, OriginBtn } from './AboutBtns';
import { trimmer, parseCloud } from '../../utilities/parsers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import aboutString from '../../data/htmlString';
import useViewport from '../../hooks/useViewport';

// const baseUrl = 'http://localhost:5000';

const AboutMe = () => {
	const [loading, setLoading] = useState(false);
	const [text, setText] = useState('');
	const [cloudText, setCloudText] = useState('');
	const [displayMode, setDisplayMode] = useState('Draft');
	const [cloud, setCloud] = useState(false);
	const [theme, setTheme] = useState(false);
	const { width } = useViewport();
	const aboutMeRef = useRef();
	const scrollToRef = useRef();
	const initialLoad = useRef(true);

	useEffect(() => {

		if(initialLoad.current) {
			initialLoad.current = false;
			return;
		}
		const scrollToElement = () => {
			if (scrollToRef.current) {
				scrollToRef.current.scrollIntoView({ behavior: 'smooth' } );
			  }
		  };

		  scrollToElement();
	}, [text, cloudText]);

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
		setCloudText('');
		setDisplayMode('Draft');
		setCloud(false);
		setTheme(false);
	};

	const handleRewrite = async e => {
		e.preventDefault();
		const btnValue = e.target.value;

		try {
			setLoading(true);
			toast.info('Awaiting Response!!', toastOptions);

			const response = await fetch(`http://localhost:5000/rewrite`, {
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
					const parsed = parseCloud(trimmed);
					setCloudText(parsed);
				} else {
					if (cloud) setCloud(false);
					const trimmed = trimmer(data.newText, '\n', false);
					setText(trimmed);
				}
				setDisplayMode(btnValue);
				if (btnValue === 'Themes') {
					setTheme(true);
				} else {
					setTheme(false);
				}
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
			<div className="aboutme__wrapper" ref={scrollToRef}>
				<div className="aboutme__div" ref={aboutMeRef}>
					{displayMode !== 'Draft' ? (
						<div className="about__title">{displayMode}</div>
					) : (
						<AboutPhoto />
					)}
					{displayMode !== 'Draft' && width >= 650 ? <AboutPhoto /> : null}
					{displayMode === 'Draft' ? <Draft /> : null}
					{displayMode === 'Cloud' ? <WordCloud tags={cloudText} /> : null}
					{displayMode === 'Summary' || displayMode === 'Themes' ? (
						<ParsedParagraphs text={text} theme={theme} />
					) : null}
					{displayMode !== 'Draft' ? (
						<OriginBtn cloud={cloud} handler={handleOriginal} />
					) : null}
				</div>
				<div className="chat">
					<div className="chat__div">
						<div className="chat__spinner">{loading && <Spinner />}</div>
						<div className="chat__text">
							Use{' '}
							<span>
								<div style={divStyle}>
									<img src={ChatPhoto} style={chatStyle} alt="chat g p t" />
								</div>
							</span>{' '}
							ChatGPT to organise by word cloud, summary or theme.
						</div>
						<div className="chat__form">
							<ChatBtns handler={handleRewrite} />
						</div>
					</div>
				</div>
				<ToastContainer />
			</div>
		</div>
	);
};

export default AboutMe;
