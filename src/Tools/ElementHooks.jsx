import { useEffect } from "react";


const useResizeWatcher = (actionFunction, elementRef) => {
	useEffect(() => {
		const observer = new ResizeObserver(() => {
			if (!elementRef.current) return;
			actionFunction(elementRef.current);
		});
		observer.observe(elementRef.current);
		return () => observer.disconnect();
	}, []);
};

const remToPx = (rem) => {
	return (
		rem.substring(0, rem.length - 3) *
		parseFloat(getComputedStyle(document.documentElement).fontSize)
	);
};

const getTailwindProperty = (property) => {
	let styles = getComputedStyle(document.documentElement);
	return styles.getPropertyValue(property);
};

export {useResizeWatcher, remToPx, getTailwindProperty};