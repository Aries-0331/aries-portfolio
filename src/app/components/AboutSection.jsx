"use client";
import Image from "next/image";
import React, { useState } from "react";
import TabButton from "./TabButton";
import { hero_data, tab_data } from "../constants/data";

const AboutSection = () => {
	const [activeTab, setActiveTab] = useState("Skills");
	return (
		<section id="about">
			<div className="mt-10 mb-10 md:grid md:grid-cols-2 md:gap-16 ">
				<div className="text-black mt-6 place-self-center">
					<h2 className="text-4xl font-bold mb-4 ">About Me</h2>
					<p>{hero_data}</p>
					<div className="flex gap-6 mt-2 py-2">
						{tab_data.map((data) => (
							<TabButton
								key={data.id}
								active={activeTab === data.label}
								selectTab={() => setActiveTab(data.label)}
								label={data.label}
								className="px-2"
							/>
						))}
					</div>
					<div>
						{tab_data.map((data) => (
							<div
								key={data.id}
								className={`mt-2 ${
									activeTab === data.label ? "block" : "hidden"
								}`}
							>
								{data.contend}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
