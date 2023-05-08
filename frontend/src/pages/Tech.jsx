import React from 'react';
import PageTitle from '../components/PageTitle';
import './Tech.css';
import CarouselItems from '../components/CarouselItem';

function Tech() {
	return (
		<div>
			<div className="carousel">
				<PageTitle text="Tech Experience" />
			</div>
			<div className="carousel__container">
				<CarouselItems />
			</div>
		</div>
	);
}

export default Tech;
