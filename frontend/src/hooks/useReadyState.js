import { useState, useEffect } from 'react';

const useReadyState = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const checkAppLoaded = () => {
				setLoading(false);
		};

		window.addEventListener('load', checkAppLoaded);

		if (loading) {
			checkAppLoaded();
		} else
			return () => {
				window.removeEventListener('load', checkAppLoaded);
			};
	}, [loading]);

	return [loading];
};

export default useReadyState;
