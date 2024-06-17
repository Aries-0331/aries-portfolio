"use client";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Link from "next/link";
import { navLinks } from "../constants/data";

const NavBar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);
	return (
		<nav
			id="home"
			className="fixed top-0 left-0 right-0 z-10 bg-[#FFFFFF] bg-opacity-95 drop-shadow-md"
		>
			<div className="flex flex-wrap items-center mx-auto px-4 py-6">
				<div className="mobile-menu w-full px-6 flex justify-between md:hidden ">
					<Link href="/" className="flex items-center text-2xl font-semibold ">
						Aries.dev
					</Link>
					{!navbarOpen ? (
						<button
							onClick={() => setNavbarOpen(true)}
							className="flex items-center px-3 py-2 border rounded border-black  text-black hover:text-gray-500 hover:border-gray-500 "
						>
							<Bars3Icon className="h-5 w-5" />
						</button>
					) : (
						<button
							onClick={() => setNavbarOpen(false)}
							className="flex items-center px-3 py-2 border border-black rounded text-black hover:text-gray-500 hover:border-gray-500 "
						>
							<XMarkIcon className="h-5 w-5" />
						</button>
					)}
				</div>
				<div
					className="menu hidden md:flex md:justify-between md:w-full mr-12"
					id="navbar"
				>
					<Link href="/" className="ml-12 sm:text-2xl font-semibold ">
						Aries.dev
					</Link>
					<ul className="flex items-center ml-16 md:p-0 md:space-x-8 mt-0">
						{navLinks.map((link, index) => (
							<li key={index}>
								<Link
									href={link.path}
									className="block px-3 py-4 text-[#2d2e32] sm:text-xl rounded md:p-0 hover:text-gray-500 font-semibold"
								>
									{link.title}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>

			{navbarOpen ? <MenuOverlay links={navLinks} /> : null}
		</nav>
	);
};

export default NavBar;
