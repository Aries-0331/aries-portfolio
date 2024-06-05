import React from "react";

const Footer = () => {
	return (
		<footer className="relative w-full h-20 left-0 bottom-0 border-t border-t-slate-500">
			<div className="flex w-full h-full justify-center items-center text-slate-600">
				All rights reserved &copy; {new Date().getFullYear()} | Made with ❤️ by
				Aries.
			</div>
		</footer>
	);
};

export default Footer;
