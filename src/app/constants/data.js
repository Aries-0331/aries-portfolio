import React from "react";
import Link from "next/link";

export const navLinks = [
	{
		title: "Home",
		path: "#home",
	},
	{
		title: "About",
		path: "#about",
	},
	{
		title: "Projects",
		path: "#projects",
	},
	{
		title: "Achieves",
		path: "#achieve",
	},
	{
		title: "Contact",
		path: "#contact",
	},
];

export const hero_data = `A passionate developer based in Beijing, China.`;

export const tab_data = [
	{
		id: "skills",
		label: "Skills",
		contend: (
			<ul className="flex flex-col flex-wrap">
				<li>JavaScript</li>
				<li>TypeScript</li>
				<li>React.js</li>
				<li>Next.js</li>
				<li>Redux</li>
				<li>Zustand</li>
				<li>Tailwind</li>
			</ul>
		),
	},
	{
		id: "certificates",
		label: "Certificates",
		contend: (
			<ul>
				<li>Programming with JavaScript</li>
				<li>Basic React - Meta</li>
				<li>Advanced React - Meta</li>
				<li>HTML and CSS in depth - Meta</li>
				<li>Version Control - Meta</li>
				<li>APIs - Meta</li>
				<li>Python for Everyone - University of Michigan</li>
				<li>Django Web Framework - Meta</li>
				<Link
					href="https://github.com/Aries-0331"
					className=" text-slate-400 border-b-2 hover:text-white"
				>
					See more
				</Link>
			</ul>
		),
	},
	{
		id: "experiences",
		label: "Experiences",
		contend: (
			<ul>
				<li>Frontend Developer, Gen-strong, April,2023 -- Present</li>
				<li>Software Engineer, Xylink, October,2020 -- April,2023</li>
				<li>Software Engineer, VisionVera, July, 2017 -- September,2020</li>
			</ul>
		),
	},
];

export const project_data = [
	{
		id: "brainwave",
		title: "Brainwave",
		description:
			"Boost your brain power with interactive exercises. A cutting-edge platform built with React and Tailwind CSS.",
		cover: "/images/projects/brainwave.webp",
		github: "https://github.com/Aries-0331/Brainwave",
		preview: "https://brainwave-ruddy-six.vercel.app/",
	},
	{
		id: "camping",
		title: "Camping",
		description:
			"Navigate nature effortlessly with the power of technology. Driven by React.js, Tailwind and Vite.",
		cover: "/images/projects/travel.png",
		github: "https://github.com/Aries-0331/travelapp",
		preview: "https://travel-rouge-five.vercel.app/",
	},
	{
		id: "nike",
		title: "Nike",
		description:
			"Experience the iconic Nike shopping interface through this meticulously crafted clone, built using React, Tailwind and Vite.",
		cover: "/images/projects/nike.png",
		github: "https://github.com/Aries-0331/Nike",
		preview: "https://nike-two-blue.vercel.app/",
	},
];

export const social_data = [
	{
		id: "github",
		url: "https://www.github.com/Aries-0331",
		icon: "/github.svg",
	},
	{
		id: "linkedin",
		url: "https://www.linkedin.com/in/aries0331",
		icon: "/linkedin.svg",
	},
	{
		id: "blog",
		url: "https://arieszhou.xyz",
		icon: "/blog.svg",
	},
];

export const tech_stack = [
	{
		label: "HTML",
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
	},
	{
		label: "CSS",
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
	},

	{
		label: "JavaScript",
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
	},
	{
		label: "TypeScript",
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
	},
	{
		label: "React",
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
	},
	{
		label: "NextJS",
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
	},
	{
		label: "Tailwind",
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
	},
	{
		label: "Framer Motion",
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
	},
	{
		label: "NodeJS",
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
	},
	{
		label: "ExpressJS",
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
	},
	{
		label: "MongoDB",
		url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
	}
];

export const certificates = [
	{
		id: "1",
		name: "Project Management Professional",
		url: "/images/pmp.png",
	},
	{
		id: "2",
		name: "HTML and CSS in Depth",
		url: "/images/html_css_in_depth.png",
	},
	{
		id: "3",
		name: "Basic React",
		url: "/images/react_basic.png",
	},
	{
		id: "4",
		name: "Advanced React",
		url: "/images/advanced_react.png",
	},
	{
		id: "5",
		name: "Version Control",
		url: "/images/version_control.png",
	},
	{
		id: "6",
		name: "APIs",
		url: "/images/apis.png",
	},
	{
		id: "7",
		name: "Python Data Structure",
		url: "/images/python_data_structure.png",
	},
	{
		id: "8",
		name: "Python for Everyone",
		url: "/images/python_for_everybody.png",
	},
	{
		id: "9",
		name: "Django Framework",
		url: "/images/django_framework.png",
	},
	{
		id: "10",
		name: "Python for Data Science, AI & Development",
		url: "/images/Python for Data Science, AI & Development.png",
	},
	{
		id: "11",
		name: "Developing AI Application with Python and Flask",
		url: "/images/Developing AI Application with Python and Flask.png",
	},
	{
		id: "12",
		name: "Developing Back-End Apps with Node.js and Express",
		url: "/images/Developing Back-End Apps with Node.js and Express.png",
	},
];
