import { useState, useEffect } from 'react';

function useViewport() {
	const [width, setWidth] = useState(window.innerWidth);
	const [shift, setShift] = useState(0);
	const [dupe, setDupe] = useState(0);
	const [shiftArr, setShiftArr] = useState(0);
	const [itemStyleObj, setItemStyleObj] = useState({
		position: 'relative',
		content: '',
		zIndex: '-2',
		borderRadius: '50%',
	});
	const [imgStyleObj, setImgStyleObj] = useState({
		position: "relative",
		objectFit: "contain",
		zIndex: "-1",
	});
	const [speed, setSpeed] = useState(0);
	const breakpointMd = 600;
	const breakpointLg = 992;

	useEffect(() => {
		const handleWindowResize = () => setWidth(window.innerWidth);

		window.addEventListener('resize', handleWindowResize);

		responsiveSetter(width);

		return () => window.removeEventListener('resize', handleWindowResize);
	}, [width]);


	const responsiveSetter = val => {
		if (val < breakpointMd) {
			setShift(100);
			setDupe(500);
			setShiftArr(700);
			setSpeed(250);
			setItemStyleObj(prev => {
				return {
					...prev,
					height: '50px',
					width: '50px',
					padding: '15px',
				 	margin: '10px'
				}
			});
            setImgStyleObj(prev => {
				return {
					...prev,
					height: "50px",
					width: "50px",
				}
			})
		}
		if (val > breakpointMd && val < breakpointLg) {
			setShift(155);
			setDupe(775);
			setShiftArr(1085);
			setSpeed(387);
			setItemStyleObj( prev => {
				return {
					...prev,
					height: "65px",
					width: "65px",
					margin: "25px",
					padding: "20px"

				}
			}
			);
            setImgStyleObj(prev => {
				return {
					...prev,
					height: "65px",
					width: "65px",
				}
			})
		}

		if (val > breakpointLg) {
			setShift(200);
			setDupe(1000);
			setShiftArr(1400);
			setSpeed(500);
            setItemStyleObj(prev => {
				return {
					...prev,
					height: '80px',
					width: '80px',
					margin: '35px',
					padding: '25px'

				}
			});
            setImgStyleObj(prev => {
				return {
					...prev,
					height: "80px",
					width: "80px",
				}
			})
		}
	};

	return { width, shift, dupe, shiftArr, speed, itemStyleObj, imgStyleObj };
}

export default useViewport;
