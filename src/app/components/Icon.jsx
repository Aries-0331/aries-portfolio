import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Icon = ({ label, url }) => {
	return (
		<div className="relative flex justify-center items-center group">
			<div className="absolute opacity-0 bottom-full mb-2 text-xs text-gray-500 transition-opacity group-hover:opacity-100 duration-1000">
				{label}
			</div>
			<motion.div key={label} whileHover={{ scale: 1.2 }} className="">
				<Image
					src={url}
					width={36}
					height={36}
					alt="skill icon"
					priority={false}
				/>
			</motion.div>
		</div>
	);
};

export default Icon;
