"use client";
import React, { useRef } from "react";
import { hero_data } from "../constants/data";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const AboutSection = () => {
	const ref = useRef(null);
	const isInView = useInView(ref);

	return (
		<section id="about" className="w-full flex flex-col items-center">
			<motion.div
				ref={ref}
				initial={{ x: "-100%" }}
				animate={{ x: isInView ? 0 : "-100%" }}
				transition={{ ease: "easeInOut", duration: 1 }}
				className="pt-10 w-full lg:w-[50%] relative flex flex-col items-start  gap-8 px-6 text-black"
			>
				<div className="flex flex-col">
					<h2 className="text-4xl font-bold ">About</h2>
					<p className="text-slate-400">{hero_data}</p>
					<p className="py-4">
						The cusp of creativity and innovation has always fascinated me and
						I&apos;ve never been afraid to just jump in and give it a go.
						I&apos;ve been coding since the day I first owned my laptop.
					</p>
				</div>
				<div className="flex flex-col gap-2">
					<h3 className="text-xl font-bold">Career</h3>
					<p>April, 2023 to Present ---- Frontend Developer</p>
					<p>October, 2020 to April,2023 ---- Software Engineer</p>
					<p>April, 2017 to October,2020 ---- Software Engineer</p>
				</div>
				<div className="w-full flex justify-end">
					<p className="py-6 text-slate-500 text-center lg:text-end">
						“There is nothing so useless as doing efficiently that which should
						not be done at all.”
					</p>
				</div>
			</motion.div>
		</section>
	);
};

export default AboutSection;
