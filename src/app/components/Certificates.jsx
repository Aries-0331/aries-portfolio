import React from "react";
import { certificates } from "../constants/data";
import Image from "next/image";

const Certificates = () => {
	return (
		<section className="w-full h-screen bg-white">
			<div className="mt-10 mb-20 px-6 flex flex-col">
				<h2 className="text-4xl text-center font-semibold my-10 py-4">
					How I Improve Myself?
				</h2>
				<div className="relative flex items-center w-full h-full overflow-x-scroll">
					{certificates.map((cert, index) => (
						<Image
							key={index}
							src={cert.url}
							alt="cert"
							width={400}
							height={300}
							size={400}
							className=""
							style={{ width: "auto", height: "217" }}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Certificates;
