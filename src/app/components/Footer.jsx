import React from "react";
import { social_data } from "../constants/data";
import SocialIcon from "./SocialIcon";

const Footer = () => {
	return (
		<footer className="block w-full h-20 left-0 bottom-0 border-t border-t-slate-500">
			<div className="flex w-full h-full justify-center items-center text-slate-600">
				All rights reserved &copy; {new Date().getFullYear()} | Made with ❤️ by
				Aries.
			</div>
		</footer>
	);
};

export default Footer;
