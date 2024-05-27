"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
	return (
		<section>
			<div className="grid grid-cols-1 sm:grid-cols-12">
				<div className="col-span-7 text-center mt-8 sm:text-left sm:items-center lg:pl-6">
					<h1 className="flex flex-col justify-between  text-white text-3xl sm:text-4xl sm:leading-normal font-extrabold lg:text-6xl">
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 py-2">
							Hello, I&apos;m Aries{" "}
						</span>
						<TypeAnimation
							sequence={[
								// Same substring at the start will only be typed out once, initially
								1000, // wait 1s before replacing "Mice" with "Hamsters"
								"Software Developer",
								1000,
								"Frontend Developer",
								1000,
								"Life long learner",
								1000,
							]}
							wrapper="span"
							speed={50}
							repeat={Infinity}
						/>
					</h1>
					{/* <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
						A passionate developer.
					</p> */}
					<div className="mt-6 place-self-end">
						<Link
							href="/#contact"
							className="inline-block px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-100 text-white"
						>
							Hire Me
						</Link>
						<button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  text-white border border-white mt-3">
							<span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
								Download CV
							</span>
						</button>
					</div>
				</div>
				<div className="col-span-5 place-self-right max-sm:place-self-center mt-8 lg:mt-0">
					<div className="relative rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] ">
						<Image
							src="/images/coder.jpeg"
							alt="hero image"
							className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
							width={500}
							height={500}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
