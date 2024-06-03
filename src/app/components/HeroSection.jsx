"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { social_data, tech_stack } from "../constants/data";
import SocialIcon from "./SocialIcon";

const HeroSection = () => {
	return (
		<section>
			<div className="flex flex-col mt-8 items-center justify-center gap-8 md:flex-row md:justify-between">
				{/* hero image */}
				<div className="relative rounded-full w-[250px] h-[250px] md:w-[400px] md:h-[400px] ">
					<Image
						src="/images/coder.jpeg"
						alt="hero image"
						className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
						width={350}
						height={350}
					/>
				</div>

				{/* title and social links */}
				<div className="text-center md:text-left md:items-center">
					<h1 className="flex flex-col justify-between gap-2 text-white text-4xl md:text-6xl md:leading-normal font-bold">
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#232526] to-[#414345] py-2">
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
								"Life-long learner",
								1000,
							]}
							wrapper="span"
							speed={50}
							repeat={Infinity}
							wordBreak="break-all"
							className="text-2xl md:text-4xl text-[#414345]"
						/>
					</h1>
					<div className="mt-10">
						<ul className="flex items-center justify-center gap-4 md:justify-start">
							{social_data.map((social) => (
								<SocialIcon
									key={social.id}
									url={social.url}
									icon={social.icon}
								/>
							))}
						</ul>
					</div>
				</div>
			</div>
			<div className="mt-8 px-2 flex flex-col md:flex-row items-center justify-center gap-2 ">
				<p className="hidden md:block text-gray-500">Tech Stack |</p>
				<div className="ml-4 flex gap-2">
					{tech_stack.map((item) => (
						<Image
							key={item.label}
							src={item.url}
							width={32}
							height={32}
							alt="skill icon"
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
