import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, githubUrl, previewUrl }) => {
	return (
		<div className="mt-6 w-[400px] flex flex-col items-center ">
			<div
				className="relative w-full h-[300px] rounded-xl shadow-lg group overflow-hidden"
				style={{
					background: `url(${imgUrl})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div className="overlay absolute items-center justify-center gap-8 left-0 top-0 w-full h-full bg-[#181818] opacity-0 hidden group-hover:flex group-hover:opacity-80 transition-full duration-500">
					<Link href={githubUrl} target="_blank">
						<CodeBracketIcon className="h-10 w-10 text-white" />
					</Link>
					<Link href={previewUrl} target="_blank">
						<EyeIcon className="h-10 w-10 text-white" />
					</Link>
				</div>
			</div>
			<h3 className="text-2xl font-semibold text-black text-center pt-4">
				{title}
			</h3>
			<p className="text-slate-400">{description}</p>
		</div>
	);
};

export default ProjectCard;
