import React from "react";
import NavLink from "./NavLink";
import { social_data } from "../constants/data";
import SocialIcon from "./SocialIcon";

const MenuOverlay = ({ links }) => {
	return (
		<div>
			<ul className="flex flex-col py-4 items-center">
				{links.map((link, index) => (
					<li key={index}>
						<NavLink href={link.path} title={link.title} />
					</li>
				))}
			</ul>
			<div className="flex justify-center items-center">
				{social_data.map((social) => (
					<SocialIcon key={social.id} url={social.url} icon={social.icon} />
				))}
			</div>
		</div>
	);
};

export default MenuOverlay;
