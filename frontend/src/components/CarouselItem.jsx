import React, { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './CarouselItem.css';
import useViewport from '../hooks/useViewport';
import throttle from '../hooks/useThrottle';
import allTech from '../data/staticCarousel';
import OrbFactory from './CarouselOrbs';

function CarouselItem(props) {
	const previousIdx = useRef(0);
	const useDupe = useRef(false);
	const startValue = useRef(true);
	const useReverse = useRef(false);
	const [currentIdx, setCurrentIdx] = useState(7);
	//directionIdx 0 = left / 6 = right / null = duplicate items not in use
	const [directionIdx, setDirectionIdx] = useState(null);
	const [shiftValue, setShiftValue] = useState(0);
	const [dupeShiftValue, setDupeShiftValue] = useState(0);
	const [currentTech, setCurrentTech] = useState(allTech);
	const [showItemArr, setShowItemArr] = useState(true);
	const [showDupeArr, setShowDupeArr] = useState(false);
	const { speed, shift, dupe, shiftArr } = useViewport();

	const allTechClone = JSON.parse(JSON.stringify(allTech));
	const dupeTech = allTechClone.filter(
		item =>
			item.idx !== 0 &&
			item.idx !== 4 &&
			item.idx !== 5 &&
			item.idx !== 6 &&
			item.idx !== 8 &&
			item.idx !== 9 &&
			item.idx !== 10 &&
			item.idx !== 14
	);

	dupeTech.forEach(item => {
		item.visible = false;
		return item;
	});

	const [dupeCurrentTech, setDupeCurrentTech] = useState(dupeTech);

	useEffect(() => {
	

		if(startValue.current) {
			startValue.current = false;
		}

		if (!useDupe.current) {
			updateVisibility();
		}

		if (useDupe.current) {
			duplicateVisibility();
		}
	}, [currentIdx]);

	const btnLeft = throttle(() => {
		checkDirection(0, 6, 2, true);
	}, speed);

	const btnRight = throttle(() => {
		checkDirection(6, 0, 12, false);
	}, speed);

	const checkDirection = (
		thisDirection,
		revDirection,
		currentIdx1,
		isBtnLeft
	) => {
		if (directionIdx === thisDirection) {
			useReverse.current = false;
		}

		if (directionIdx === revDirection) {
			useReverse.current = true;
		}

		if ((currentIdx === currentIdx1) & (directionIdx === revDirection)) {
			setDirectionIdx(null);
			useDupe.current = false;
			useReverse.current = false;
		}

		isBtnLeft ? moveItemPosition(14, 0, true) : moveItemPosition(0, 14, false);
	};

	const moveItemPosition = (idxLimit, setIdx, isBtnLeft) => {
		//icrement item index
		currentIdx === idxLimit
			? setCurrentIdx(setIdx)
			: setCurrentIdx(isBtnLeft ? prev => prev + 1 : prev => prev - 1);

		//move item position
		shiftValue === 0
			? setShiftValue(isBtnLeft ? -shift : shift)
			: setShiftValue(isBtnLeft ? prev => prev - shift : prev => prev + shift);

		//setup duplicate carousel items
		isBtnLeft
			? enableDuplicateItems(11, 0, 12, true)
			: enableDuplicateItems(3, 6, 2, false);
	};

	const enableDuplicateItems = (prepIdx, dupeIdx, enableIdx, isBtnLeft) => {
		//prepare duplicate items position for display
		if (currentIdx === prepIdx) {
			setDupeShiftValue(isBtnLeft ? dupe : -dupe);
			setDirectionIdx(dupeIdx);
		}

		//enable duplicate items for display
		if (currentIdx === enableIdx) {
			useDupe.current = true;
		}
		previousIdx.current = currentIdx;
	};

	const updateVisibility = () => {
		const tech = [...currentTech];

		tech.forEach(item => {
			if (item.idx === 0 || item.idx === 14) {
				return (item.visible = false);
			} else {
				return item.idx === currentIdx ||
					item.idx === currentIdx - 1 ||
					item.idx === currentIdx + 1
					? (item.visible = true)
					: (item.visible = false);
			}
		});
		setCurrentTech(tech);
	};

	const duplicateVisibility = () => {
		if (directionIdx === 0) {
			switch (currentIdx) {
				case 12:
					if (useReverse.current) {
						setShowDupeArr(false);
						instantiateVisibility(0, 11, false, true, true);
					}
					break;
				case 13:
					if (useReverse.current) {
						instantiateVisibility(1, 12, false, true, true);
					} else {
						setShowDupeArr(true);
						instantiateVisibility(0, 11, true, false, false);
					}
					break;
				case 14:
					if (useReverse.current) {
						setShiftValue(-shiftArr);
						instantiateVisibility(2, 13, false, true, true);
						setTimeout(() => {
							setShowItemArr(true);
						}, speed + 100);
					} else {
						instantiateVisibility(1, 12, true, false, false);
					}
					break;
				case 0:
					if (useReverse.current) {
						instantiateVisibility(0, 4, true, false, true);
					} else {
						setShowItemArr(false);
						instantiateVisibility(2, 13, true, false, false);

						setShiftValue(dupe);
					}
					break;
				case 1:
					if (useReverse.current) {
						instantiateVisibility(1, 5, true, false, true);
					} else {
						setShowItemArr(true);
						instantiateVisibility(0, 4, false, true, false);
					}
					break;
				case 2:
					instantiateVisibility(1, 5, false, true, false);
					break;
				case 3:
					instantiateVisibility(2, 6, false, true, false);
					setCurrentIdx(5);
					setDirectionIdx(null);
					useDupe.current = false;
					break;
				default:
					return;
			}
		}
		if (directionIdx === 6) {
			switch (currentIdx) {
				case 2:
					setShowDupeArr(false);
					instantiateVisibility(6, 3, false, true, false);
					break;
				case 1:
					if (useReverse.current) {
						instantiateVisibility(5, 2, false, true, false);
					} else {
						setShowDupeArr(true);
						instantiateVisibility(6, 3, true, false, true);
					}
					break;
				case 0:
					if (useReverse.current) {
						setShiftValue(shiftArr);
						instantiateVisibility(4, 1, false, true, false);
						setTimeout(() => {
							setShowItemArr(true);
						}, speed);
					} else {
						instantiateVisibility(5, 2, true, false, true);
					}

					break;
				case 14:
					if (useReverse.current) {
						setShowItemArr(false);
						instantiateVisibility(6, 10, true, false, false);
					} else {
						instantiateVisibility(4, 1, true, false, true);
						setShowItemArr(false);

						setShiftValue(-dupe);
					}
					break;
				case 13:
					if (useReverse.current) {
						instantiateVisibility(5, 9, true, false, false);
					} else {
						setShowItemArr(true);
						instantiateVisibility(6, 10, false, true, true);
					}

					break;
				case 12:
					instantiateVisibility(5, 9, false, true, true);
					break;
				case 11:
					instantiateVisibility(4, 8, false, true, true);
					setCurrentIdx(9);
					setDirectionIdx(null);
					useDupe.current = false;
					break;
				default:
					return;
			}
		}
	};

	const instantiateVisibility = (
		dupeArr,
		techArr,
		bool1,
		bool2,
		incrementShiftValue
	) => {
		const dupeTech = [...dupeCurrentTech];
		const tech = [...currentTech];
		dupeTech[dupeArr].visible = bool1;
		tech[techArr].visible = bool2;
		setDupeCurrentTech(dupeTech);
		setCurrentTech(tech);
		setDupeShiftValue(
			incrementShiftValue ? prev => prev + shift : prev => prev - shift
		);
	};

	const nameSelector = idx => {
		let name;
		switch (directionIdx) {
			case 0:
				switch (idx) {
					case 14:
						name = dupeCurrentTech[0].name;
						break;
					case 0:
						name = dupeCurrentTech[1].name;
						break;
					case 1:
						name = dupeCurrentTech[2].name;
						break;
					default:
						name = allTech[idx].name;
				}
				break;
			case 6:
				switch (idx) {
					case 0:
						name = dupeCurrentTech[directionIdx].name;
						break;
					case 14:
						name = dupeCurrentTech[directionIdx - 1].name;
						break;
					case 13:
						name = dupeCurrentTech[directionIdx - 2].name;
						break;
					case 12:
						name = currentTech[10].name;
						break;
					case 11:
						name = currentTech[9].name;
						break;
					default:
						name = allTech[idx].name;
				}
				break;
			default:
				name = allTech[idx].name;
		}

		return name;
	};

	const carouselDiv = {
		transform: `translateX(${shiftValue}px)`,
		transition: 'all',
		transitionDuration: `${speed}ms`,
		transitionTimingFunction: 'linear',
	};

	const dupeCarouselDiv = {
		transform: `translateX(${dupeShiftValue}px)`,
		transition: 'all',
		transitionDuration: `${speed}ms`,
		transitionTimingFunction: 'linear',
	};

	const show = {
		opacity: '1',
	};

	const hide = {
		opacity: '0',
	};

	const carouselDescent = {
		top: "-5%"
	}


	return (
		<>
			<div className="carousel__wrapper" style={!startValue.current ? carouselDescent : null}>
				<div
					className="carousel__wrapper-items"
					style={showItemArr ? show : hide}
				>
					<div className="carousel__items" style={carouselDiv}>
						 <OrbFactory arr={currentTech} />
					</div>
				</div>
				<div
					className="carousel__wrapper-duplicate"
					style={showDupeArr ? show : hide}
				>
					<div className="carousel__duplicate" style={dupeCarouselDiv}>
						 <OrbFactory arr={dupeCurrentTech} />
					</div>
				</div>
			</div>
			<div className="carousel__controls">
				<button className=" carousel__controls-btn btn-left" onClick={btnLeft}>
					<FaChevronLeft />
				</button>
				<div className="carousel__controls-div">
					<p className="carousel__controls-text">{nameSelector(currentIdx)}</p>
				</div>
				<button
					className=" carousel__controls-btn btn-right"
					onClick={btnRight}
				>
					<FaChevronRight />
				</button>
			</div>
		</>
	);
}

export default CarouselItem;
