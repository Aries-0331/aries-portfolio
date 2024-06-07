"use client";
import React, { useRef } from "react";
import { project_data } from "../constants/data";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const ProjectsSection = () => {
	const ref = useRef(null);
	const isInView = useInView(ref);
	return (
		<section id="projects" className="bg-[#f9f9f9] w-full">
			<motion.div
				ref={ref}
				initial={{ opacity: 0 }}
				animate={{ opacity: isInView ? 1 : 0 }}
				transition={{ ease: "easeInOut", duration: 2 }}
				className="my-10 flex flex-col justify-center items-center w-full px-6"
			>
				<h2 className="text-4xl text-black font-bold py-8">Projects</h2>
				<div className="flex flex-wrap gap-6 justify-center">
					{project_data.map((project) => (
						<ProjectCard
							key={project.id}
							imgUrl={project.cover}
							title={project.title}
							description={project.description}
							githubUrl={project.github}
							previewUrl={project.preview}
						/>
					))}
				</div>
			</motion.div>
		</section>
	);
};

export default ProjectsSection;
