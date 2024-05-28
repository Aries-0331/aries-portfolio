"use client";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import SocialIcon from "./SocialIcon";
import { social_data } from "../constants/data";

const navLinks = [
	{
		title: "Home",
		path: "/",
	},
	{
		title: "Projects",
		path: "#projects",
	},
	{
		title: "Contact",
		path: "#contact",
	},
	{
		title: "About",
		path: "#about",
	},
];

const Navbar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);
	return (
		<nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
			<div className="flex flex-wrap justify-end items-center mx-auto px-4 py-4">
				<div className="mobile-menu block md:hidden">
					{!navbarOpen ? (
						<button
							onClick={() => setNavbarOpen(true)}
							className="flex items-center px-3 py-2 border rounded border-slate-200  text-slate-200 hover:text-white hover:border-white "
						>
							<Bars3Icon className="h-5 w-5" />
						</button>
					) : (
						<button
							onClick={() => setNavbarOpen(false)}
							className="flex items-center px-3 py-2 border border-slate-200 rounded text-slate-200 hover:text-white hover:border-white "
						>
							<XMarkIcon className="h-5 w-5" />
						</button>
					)}
				</div>
				<div
					className="menu hidden md:flex md:justify-between md:w-full"
					id="navbar"
				>
					<ul className="flex items-center ml-16 md:p-0 md:space-x-8 mt-0">
						{navLinks.map((link, index) => (
							<li key={index}>
								<NavLink href={link.path} title={link.title} />
							</li>
						))}
					</ul>
					<ul className="flex items-center mr-16 md:p-0 md:space-x-8 mt-0">
						{social_data.map((social) => (
							<SocialIcon key={social.id} url={social.url} icon={social.icon} />
						))}
					</ul>
				</div>
			</div>

			{navbarOpen ? <MenuOverlay links={navLinks} /> : null}
		</nav>
	);
};

export default Navbar;
