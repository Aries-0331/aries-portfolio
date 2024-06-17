"use client";
import React from "react";
import { Slider, Slider3D } from "./Slider";
import { certificates } from "../constants/data";
import { useWindowSize } from "../utils/useBreakPoint.js";

const Achievements = () => {
	const { width } = useWindowSize();
	return (
		<section id="achieve" className="w-full pt-16 bg-white">
			<div className="px-6 flex flex-col justify-evenly">
				<h2 className="text-4xl text-center font-semibold py-10">
					How I Improve Myself?
				</h2>

				{width > 768 ? (
					<Slider3D data={certificates} />
				) : (
					<Slider data={certificates} />
				)}
			</div>
		</section>
	);
};

export default Achievements;
