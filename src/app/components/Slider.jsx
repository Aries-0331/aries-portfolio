import Image from "next/image";
import React from "react";

export const Slider = ({ data }) => {
	return (
		<div className="w-full flex items-left animate-autoFlow">
			{data.map((item, index) => (
				<div key={index} className="w-[350px] h-[260px]">
					<Image
						src={item.url}
						fill={true}
						sizes="(max-width: 350px) 33vw"
						alt="cert"
					/>
				</div>
			))}
		</div>
	);
};

export const Slider3D = ({ data }) => {
	return (
		<div className="w-full flex-1 relative flex justify-center items-center">
			<div
				className="absolute w-[250px] h-[200px] top-[15%] animate-autoRun"
				style={{
					transformStyle: "preserve-3d",
					transform: "perspective(1000px)",
				}}
			>
				{data.map((item, index) => (
					<div
						key={index}
						className="absolute inset-0"
						style={{
							transformStyle: "preserve-3d",
							transform: `rotateY(${
								index * (360 / data.length)
							}deg) translateZ(450px)`,
						}}
					>
						<Image
							src={item.url}
							fill={true}
							sizes="(max-width: 400px) 50vw"
							alt="cert"
						/>
					</div>
				))}
			</div>
		</div>
	);
};
