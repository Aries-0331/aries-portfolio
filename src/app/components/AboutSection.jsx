"use client";
import React, { useRef } from "react";
import { hero_data } from "../constants/data";
import { motion, useInView } from "framer-motion";

const AboutSection = () => {
	const ref = useRef(null);
	const isInView = useInView(ref);

	return (
		<section id="about" className="mt-6 w-full">
			<motion.div
				ref={ref}
				initial={{ opacity: 0 }}
				animate={{ opacity: isInView ? 1 : 0 }}
				transition={{ ease: "easeInOut", duration: 2.5 }}
				className="flex flex-col items-center"
			>
				<div className="flex flex-col justify-center items-center text-black px-6">
					<h2 className="text-4xl font-bold py-4">About Me</h2>
					<p>{hero_data}</p>
				</div>
			</motion.div>
		</section>
	);
};

export default AboutSection;
