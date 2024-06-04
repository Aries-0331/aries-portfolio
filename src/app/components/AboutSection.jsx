"use client";
import React, { useRef } from "react";
import { hero_data } from "../constants/data";
import { motion, useInView } from "framer-motion";

const AboutSection = () => {
	const ref = useRef(null);
	const isInView = useInView(ref);

	return (
		<section id="about" className="w-full h-[calc(100vh-80px)] bg-white">
			<motion.div
				ref={ref}
				initial={{ opacity: 0 }}
				animate={{ opacity: isInView ? 1 : 0 }}
				transition={{ ease: "easeInOut", duration: 2 }}
				className="flex flex-col justify-center items-center"
			>
				<div className="mt-16 flex flex-col justify-center items-center text-black px-6">
					<h2 className="text-4xl font-bold py-4">About</h2>
					<p>{hero_data}</p>
				</div>
			</motion.div>
		</section>
	);
};

export default AboutSection;
