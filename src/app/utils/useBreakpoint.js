import { useState, useEffect } from "react";

export const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined,
	});

	useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}

		window.addEventListener("resize", handleResize);

		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowSize;
};

const breakpoints = {
	sm: 640,
	md: 768,
	lg: 1024,
	xl: 1280,
	"2xl": 1536,
};

export function useBreakPoint() {
	const { width } = useWindowSize();
	return {
		isSm: width >= breakpoints.sm && width < breakpoints.md,
		isMd: width >= breakpoints.md && width < breakpoints.lg,
		isLg: width >= breakpoints.lg && width < breakpoints.xl,
		isXl: width >= breakpoints.xl && width < breakpoints["2xl"],
		is2Xl: width >= breakpoints["2xl"],
	};
}
