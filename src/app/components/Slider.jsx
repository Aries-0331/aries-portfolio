import React from "react";
import Image from "next/image";
import { PhotoProvider, PhotoView } from 'react-photo-view';

export const Slider = ({ images }) => {
	return (
		<PhotoProvider>
			<div className="w-full py-8 flex gap-6 items-center overflow-x-scroll">
				{images.map((image, index) => (
					<PhotoView key={index} src={image.url}>
						<Image 
							key={index}
							className="cursor-pointer"
							src={image.url}
							width={360}
							height={270}
							alt={image.name}
							title={image.name}
						/>
					</PhotoView>
				))}
			</div>
		</PhotoProvider>
	);
};

export const Slider3D = ({ data }) => {
	return (
		<div className="w-full h-[500px] relative flex justify-center">
			<div
				className="absolute top-[100px] w-[200px] h-[160px] animate-autoRun"
				style={{
					transformStyle: "preserve-3d",
					transform: "perspective(1200px)",
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
							}deg) translateZ(350px)`,
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
