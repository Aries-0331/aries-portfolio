"use client";
import React, { useState, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { certificates } from "../constants/data";
import Image from "next/image";

const Experiences = () => {
	const ref = useRef(null);
	const { scrollXProgress } = useScroll(ref);
	const duplicatedSlides = [...certificates, ...certificates];

	return (
		<section className="w-full">
			<div className="h-[400px] flex flex-col">
				<h2 className="text-4xl text-center font-semibold my-8 py-4">
					How I Improve Myself?
				</h2>
				<div className="relative flex items-center w-full h-full overflow-x-scroll">
					{duplicatedSlides.map((cert, index) => (
						<Image
							key={index}
							src={cert.url}
							alt="cert"
							width={400}
							height={300}
							size={400}
							className="mx-[-1.5rem]"
							style={{ width: "auto", height: "auto" }}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Experiences;
