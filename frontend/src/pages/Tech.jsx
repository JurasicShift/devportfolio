import React from 'react';
import PageTitle from '../components/Utilities/PageTitle';
import './Tech.css';
import CarouselItems from '../components/Tech/CarouselItem';
import Icons from '../components/Utilities/Icons';
import Spinner from '../components/Utilities/Spinner';
import useReadyState from '../hooks/useReadyState';
import { titleTab } from '../utilities/titleFn';

function Tech() {
	const [loading] = useReadyState();
	titleTab('Tech');
	return (
		<>
			{loading ? (
				<Spinner height="100px" width="100px" lg={true} />
			) : (
				<div>
					<div className="carousel">
						<PageTitle text="Tech Experience" />
					</div>
					<div className="carousel__container">
						<CarouselItems />
					</div>
					<Icons />
				</div>
			)}
		</>
	);
}

export default Tech;
