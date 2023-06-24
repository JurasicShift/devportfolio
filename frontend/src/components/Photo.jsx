import React, { useEffect, useState } from 'react';
import './Photo.css';
import ProfilePic from '../imgs/portfolio1.jpg';

const Photo = () => {
	return (
		<div className="photo">
			<div className="photo__div">
				<img src={ProfilePic} alt="Your photo" />
			</div>
		</div>
	);
};

export default Photo;
