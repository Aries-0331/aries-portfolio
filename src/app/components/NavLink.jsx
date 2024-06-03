import React from "react";
import Link from "next/link";

const NavLink = ({ href, title }) => {
	return (
		<Link
			href={href}
			className="block px-3 py-4 text-[#2d2e32] sm:text-xl rounded md:p-0 hover:text-gray-500 font-poppins font-semibold"
		>
			{title}
		</Link>
	);
};

export default NavLink;
