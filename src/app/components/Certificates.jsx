"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { certificates } from "../constants/data";
import Image from "next/image";

const Certificates = () => {
	const ref = useRef(null);
	const isInView = useInView(ref);

	return (
		<section className="w-full bg-white">
			<motion.div
				ref={ref}
				initial={{ opacity: 0 }}
				animate={{ opacity: isInView ? 1 : 0 }}
				transition={{ ease: "easeInOut", duration: 2 }}
				className="h-[400px] flex flex-col"
			>
				<h2 className="text-4xl text-center font-semibold my-8 py-4">
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
			</motion.div>
		</section>
	);
};

export default Certificates;
