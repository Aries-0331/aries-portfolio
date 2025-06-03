"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { hero_data } from "../constants/data";

const AboutSection = () => {
	const ref = useRef(null);
	const isInView = useInView(ref);

	return (
		<section id="about" className="w-full flex flex-col items-center pt-20">
			<motion.div
				ref={ref}
				initial={{ opacity: 0 }}
				animate={{ opacity: isInView ? 1 : 0 }}
				transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
				className=" w-full md:w-[50%] relative flex flex-col items-start  gap-8 px-6 text-black"
				role="article"
				aria-label="About section"
			>
				<div className="flex flex-col gap-4">
					<h2 className="text-4xl font-bold ">About</h2>
					<p className="text-slate-400">{hero_data}</p>
					<p>
						The cusp of creativity and innovation has always fascinated me, and
						I&apos;ve never been afraid to dive in and give it a try. I&apos;ve
						been coding since the day I first owned a laptop and have been
						working as a developer for over{" "}
						<span className="text-2xl font-bold">7</span> years.
					</p>
					<p>
						<span className="underline underline-offset-4">
							Over the past three years,{" "}
						</span>{" "}
						I have immersed myself in{" "}
						<span className="text-2xl font-semibold">frontend development</span>
						, focusing on building user-centric web interfaces and writing
						clean, elegant code with React. This journey has also led me to
						explore various exciting technologies in the field.
					</p>
					<p>
						<span className="underline underline-offset-4">
							In the first four years of my career,{" "}
						</span>
						I specialized in{" "}
						<span className="text-2xl font-semibold">software security</span>,
						particularly in authentication, encryption, and TLS-related
						cryptographic schemes. During this period, I built a solid
						foundation in software engineering, teamwork, and communication
						skills.
					</p>
				</div>

				<div className="flex flex-col gap-2 w-full">
					<h3 className="text-xl font-bold">Career</h3>
					<ul className="space-y-4 w-full">
						{[
							["April, 2023", "Present", "Web Developer"],
							["October, 2020", "April, 2023", "Software Engineer"],
							["April, 2017", "October, 2020", "Software Engineer"],
						].map(([start, end, title], index) => (
							<li
								key={index}
								className="flex justify-between items-center w-full py-2 border-b border-gray-200"
							>
								<time className="font-medium">{start}</time>
								<span className="mx-4">-</span>
								<time className="font-medium">{end}</time>
								<span className="flex-1 text-right font-semibold">{title}</span>
							</li>
						))}
					</ul>
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
