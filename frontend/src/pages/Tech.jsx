import React from 'react';
import PageTitle from '../components/PageTitle';
import './Tech.css';
import CarouselItems from '../components/CarouselItem';
import Icons from '../components/Icons';
import Spinner from '../components/Spinner';
import useReadyState from '../hooks/useReadyState';

function Tech() {
	const [loading] = useReadyState();

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
