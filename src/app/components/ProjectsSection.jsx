import React from "react";
import { project_data } from "../constants/data";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
	return (
		<section className="mt-16" id="projects">
			<h2 className="text-center text-4xl text-white font-bold py-8 mb-4">
				My Projects
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
		</section>
	);
};

export default ProjectsSection;
