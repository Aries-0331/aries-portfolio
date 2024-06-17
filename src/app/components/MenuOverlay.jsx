import React from "react";
import Link from "next/link";

const MenuOverlay = ({ links }) => {
	return (
		<div>
			<ul className="flex flex-col py-4 items-center">
				{links.map((link, index) => (
					<li key={index}>
						<Link href={link.path}>{link.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default MenuOverlay;
