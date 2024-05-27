import Link from "next/link";
import React from "react";
import { social_data } from "../constants/data";
import SocialIcon from "./SocialIcon";

const Footer = () => {
	return (
		<footer className="block w-full h-20 left-0 bottom-0 border-t border-t-slate-500">
			<div className="flex w-full h-full justify-center items-center">
				{social_data.map((social) => (
					<SocialIcon key={social.id} url={social.url} icon={social.icon} />
				))}
			</div>
		</footer>
	);
};

export default Footer;
