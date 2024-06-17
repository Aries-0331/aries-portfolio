import React from "react";
import { Slider3D } from "./Slider";
import { certificates } from "../constants/data";

const Achievements = () => {
	return (
		<section id="achieve" className="w-full pt-16 bg-white">
			<div className="h-screen px-6 flex flex-col justify-evenly">
				<h2 className="text-4xl text-center font-semibold py-10">
					How I Improve Myself?
				</h2>
				<Slider3D data={certificates} />
			</div>
		</section>
	);
};

export default Achievements;
