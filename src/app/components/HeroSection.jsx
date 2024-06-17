"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { social_data, tech_stack } from "../constants/data";
import SocialIcon from "./SocialIcon";
import Icon from "./Icon";
const HeroSection = () => {
	const morphAnimation = {
		initial: { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
		animate: {
			borderRadius: [
				"60% 40% 30% 70% / 60% 30% 70% 40%",
				"30% 60% 70% 40% / 50% 60% 30% 60%",
				"60% 40% 30% 70% / 60% 30% 70% 40%",
			],
		},
		transition: {
			ease: "easeInOut",
			duration: 8,
			repeat: Infinity,
		},
	};
	return (
		<section
			id="hero"
			className="flex flex-col justify-center items-center w-full h-screen bg-[#f9f9f9]"
		>
			<div className="pb-8 flex flex-col items-center justify-center max-w-[1240px] gap-8 md:flex-row md:justify-between">
				{/* hero image */}
				<div className="relative">
					<motion.div
						{...morphAnimation}
						className="relative w-[250px] h-[250px] md:w-[400px] md:h-[400px] overflow-hidden"
					>
						<Image
							src="/images/coder.jpeg"
							alt="hero image"
							width={400}
							height={400}
							className="object-cover w-full h-full"
							priority
						/>
					</motion.div>
				</div>

				{/* title and social links */}
				<div className="text-center md:text-left md:items-center">
					<h1 className="flex flex-col justify-between gap-2 text-white text-4xl md:text-6xl md:leading-normal font-bold">
						<span className="text-black py-2">Hello, I&apos;m Aries </span>
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
							className="h-[2.5rem] text-2xl md:text-4xl text-[#414345]"
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
			<div className="px-2 flex flex-col md:flex-row items-center justify-center gap-2 ">
				<p className="hidden md:block text-gray-500">Tech Stack |</p>
				<div className="ml-4 flex gap-3">
					{tech_stack.map((item) => (
						<Icon key={item.label} label={item.label} url={item.url} />
					))}
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
