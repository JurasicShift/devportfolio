import React, { useEffect, useState, useRef } from 'react';
import './HomeTitle.css';
import stateFactory from '../../utilities/stateFactory';
import stateUpdater from '../../utilities/stateUpdater';
import TitleGenerator from './HomeTitleGen';
import PageMoniker from './PageMoniker';
import HomeStars from './HomeStars';
import PropTypes from 'prop-types';

const HomeTitle = props => {
	const initialize = useRef(true);
	const [runTitleEffect, setRunTitleEffect] = useState(false);
	const [runSubtitleEffect, setRunSubtitleEffect] = useState(false);
	const [displayMonikerAndStars, setDisplayMonikerAndStars] = useState(false);
	const titleCounter = useRef(0);
	const subtitleCounter = useRef(0);

	const [name, setName] = useState(stateFactory(props.name));
	const [role, setRole] = useState(stateFactory(props.role));

	useEffect(() => {
		if (initialize.current === true && !runTitleEffect) {
			const timer = setTimeout(_ => {
				setRunTitleEffect(true);
				initialize.current = false;
			}, 1000);
			return _ => clearTimeout(timer);
		}
	});

	useEffect(() => {
		if (initialize.current === false && !runSubtitleEffect) {
			const timer = setTimeout(_ => {
				setRunSubtitleEffect(true);
			}, 200);
			return _ => clearTimeout(timer);
		}
	});

	useEffect(() => {
		if (runTitleEffect && titleCounter.current <= name.length) {
			const timer = setInterval(() => {
				setName(stateUpdater(name, titleCounter));
				titleCounter.current = titleCounter.current + 1;
			}, 100);
			return () => clearInterval(timer);
		}
	}, [runTitleEffect, name]);

	useEffect(() => {
		if (displayMonikerAndStars) return;

		if (runSubtitleEffect && subtitleCounter.current === role.length) {
			setDisplayMonikerAndStars(!displayMonikerAndStars);
		}
		if (runSubtitleEffect && subtitleCounter.current <= role.length) {
			const timer = setInterval(() => {
				setRole(stateUpdater(role, subtitleCounter));
				subtitleCounter.current = subtitleCounter.current + 1;
			}, 100);
			return () => clearInterval(timer);
		}
	}, [runSubtitleEffect, role, displayMonikerAndStars]);

	return (
		<div>
			<div className="home__stars">
				<HomeStars shootingStars={displayMonikerAndStars} />
			</div>
			<div className="home__sections">
				<section className="home__title">
					<h1 className="home__name">
						<TitleGenerator arr={name} />
					</h1>
					<div className="home__subheader">
						<p className="home__text">
							<TitleGenerator arr={role} />
						</p>
					</div>
					<PageMoniker page="PORTFOLIO" display={displayMonikerAndStars} />
				</section>
			</div>
		</div>
	);
};

HomeTitle.propTypes = {
	name: PropTypes.string,
	role: PropTypes.string,
};

export default HomeTitle;
