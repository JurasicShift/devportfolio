	const stateUpdater = (arr, counter) => {
		const updated = arr.map((obj, idx) => {
			if (idx === counter.current) {
				return {
					...obj,
					visible: true,
				};
			} else {
				return obj;
			}
			
		});
        return updated;
	}

    export default stateUpdater;