"use client";
import React, { useRef } from "react";
import { project_data } from "../constants/data";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const ProjectsSection = () => {
	const ref = useRef(null);
	const isInView = useInView(ref);
	return (
		<section id="projects" className="bg-[#f9f9f9]">
			<motion.div
				ref={ref}
				initial={{ opacity: 0 }}
				animate={{ opacity: isInView ? 1 : 0 }}
				transition={{ ease: "easeInOut", duration: 2 }}
			>
				<h2 className="text-center text-4xl text-black font-bold mt-10 py-8 mb-4">
					Projects
				</h2>
				<div className="grid grid-cols-1 place-self-center sm:grid-cols-2 md:grid-cols-3 gap-8">
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
