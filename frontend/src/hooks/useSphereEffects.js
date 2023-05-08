import { useState, useEffect, useRef } from 'react';

const useSphereEffects = () => {
	const [shadowAngle, setShadowAngle] = useState(45);
	const [shadowOpacity, setShadowOpacity] = useState(0.80);
	const useOpacityIncrement = useRef(false);
	if(shadowOpacity >= 0.90) useOpacityIncrement.current = false;
	if(shadowOpacity <= 0.30) useOpacityIncrement.current = true;

    useEffect(() => {
		const shadowMover = setInterval(_ => {
			shadowAngle === 360
				? setShadowAngle(0)
				: setShadowAngle(prev => prev + 1);
		}, 40);
		return _ => clearInterval(shadowMover);
	}, [shadowAngle]);

    useEffect(() => {
		const opacityId = setInterval(_ => {
			const newValue = useOpacityIncrement.current ? (shadowOpacity + 0.01) : (shadowOpacity - 0.01);
			const num = Math.round(newValue * 1e2) / 1e2;
			setShadowOpacity(num);
		}, 80);
		return _ => clearInterval(opacityId);
	}, [shadowOpacity]);
 
	return {shadowAngle, shadowOpacity};
};





export default useSphereEffects;
