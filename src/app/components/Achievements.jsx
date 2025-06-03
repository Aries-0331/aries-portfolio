"use client";
import React from "react";

import { certificates } from "../constants/data";

import { Slider } from "./Slider";

const Achievements = () => {
	return (
		<section id="achieve" className="w-full pt-16 bg-[#f9f9f9]">
			<div className="px-6 flex flex-col justify-evenly">
				<h2 className="text-4xl text-center font-semibold py-10">
					How I Improve Myself?
				</h2>

				<Slider images={certificates} />
			</div>
		</section>
	);
};

export default Achievements;
