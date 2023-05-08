import React from 'react';
import useViewport from '../hooks/useViewport';
import useSphereEffects from '../hooks/useSphereEffects';

const OrbFactory = props => {
	const { itemStyleObj, imgStyleObj } = useViewport();
	const { shadowAngle, shadowOpacity } = useSphereEffects();

	const items = props.arr.map((item, idx) => {
		const sphereShadow = {
			background: `linear-gradient(${
				idx % 2 === 0 ? shadowAngle : -shadowAngle
			}deg, rgba(38, 57, 87, ${shadowOpacity}), rgba(253,250,242, ${shadowOpacity}))`,
		};
		return (
			<div
				className={item.visible === true ? 'carousel__show' : 'carousel__hide'}
				key={idx}
			>
				<div
					className="carousel__opacity"
					style={{ ...itemStyleObj, ...sphereShadow }}
				>
					<img
						src={item.img}
						alt={item.name}
						style={imgStyleObj}
						className="carousel__opacity-img"
					/>
				</div>
			</div>
		);
	});
	return items;
};

export default OrbFactory;
