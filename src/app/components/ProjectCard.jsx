import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, githubUrl, previewUrl }) => {
	return (
		<div className="mt-6 text-white">
			<div
				className="relative h-52 md:h-72 rounded-xl shadow-lg group"
				style={{
					background: `url(${imgUrl})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div className="overlay absolute items-center justify-center gap-8 left-0 top-0 w-full h-full bg-[#181818] opacity-0 hidden group-hover:flex group-hover:opacity-80 transition-full duration-500">
					<Link href={githubUrl}>
						<CodeBracketIcon className="h-10 w-10 text-white" />
					</Link>
					<Link href={previewUrl}>
						<EyeIcon className="h-10 w-10 text-white" />
					</Link>
				</div>
			</div>
			<h3 className="text-2xl font-semibold text-white text-center py-4">
				{title}
			</h3>
			<p className="text-slate-400">{description}</p>
		</div>
	);
};

export default ProjectCard;
