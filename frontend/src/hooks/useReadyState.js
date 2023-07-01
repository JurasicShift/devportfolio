import { useState, useEffect } from 'react';

const useReadyState = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const checkAppLoaded = () => {
			if (document.readyState === 'complete') setLoading(false);
		};

		document.addEventListener('readystatechange', checkAppLoaded);

		if (loading) {
			checkAppLoaded();
		} else
			return () => {
				document.removeEventListener('readystatechange', checkAppLoaded);
			};
	}, [loading]);

	return [loading];
};

export default useReadyState;
