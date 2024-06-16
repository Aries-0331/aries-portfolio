"use client";
import Image from "next/image";
import React from "react";
import { certificates } from "../constants/data";

const Slider = () => {
	return (
		<div className="banner w-full h-screen relative flex justify-center items-center">
			<div
				className="absolute w-[250px] h-[200px] top-[10%] animate-autoRun"
				style={{
					transformStyle: "preserve-3d",
					transform: "perspective(1000px)",
				}}
			>
				{certificates.map((cert, index) => (
					<div
						key={index}
						className="absolute inset-0"
						style={{
							transformStyle: "preserve-3d",
							transform: `rotateY(${
								index * (360 / certificates.length)
							}deg) translateZ(450px)`,
						}}
					>
						<Image
							src={cert.url}
							alt="cert"
							width={250}
							height={200}
							objectFit="cover"
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Slider;
