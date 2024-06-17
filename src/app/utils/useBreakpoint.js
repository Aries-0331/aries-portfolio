const breakpoints = {
	sm: 640,
	md: 768,
	lg: 1024,
	xl: 1280,
	"2xl": 1536,
};

export const useBreakpoint = () => {
	const { width } = useWindowSize();
	return {
		isSm: width >= breakpoints.sm && width < breakpoints.md,
		isMd: width >= breakpoints.md && width < breakpoints.lg,
		isLg: width >= breakpoints.lg && width < breakpoints.xl,
		isXl: width >= breakpoints.xl && width < breakpoints["2xl"],
		is2Xl: width >= breakpoints["2xl"],
	};
};
