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
		title: "CAMPING APP",
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
		url: "https://urchinzhou.com",
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
];

export const certificates = [
	{
		id: "pmp",
		url: "/images/pmp.png",
	},
	{
		id: "html and css in depth",
		url: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~TZCC3MNNQ787/CERTIFICATE_LANDING_PAGE~TZCC3MNNQ787.jpeg",
	},
	{
		id: "programming with javascript",
		url: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~E58NBL2U7UB7/CERTIFICATE_LANDING_PAGE~E58NBL2U7UB7.jpeg",
	},
	{
		id: "version control",
		url: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~XGWHDEHKZJEK/CERTIFICATE_LANDING_PAGE~XGWHDEHKZJEK.jpeg",
	},
	{
		id: "react basic",
		url: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~W6L9TWVERJV3/CERTIFICATE_LANDING_PAGE~W6L9TWVERJV3.jpeg",
	},
	{
		id: "advanced react",
		url: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~MZNDJNWMG5XR/CERTIFICATE_LANDING_PAGE~MZNDJNWMG5XR.jpeg",
	},
	{
		id: "python for everyone",
		url: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~UMWGLMHRTWBU/CERTIFICATE_LANDING_PAGE~UMWGLMHRTWBU.jpeg",
	},
	{
		id: "python data structures",
		url: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~5A3FCQ5RAT4B/CERTIFICATE_LANDING_PAGE~5A3FCQ5RAT4B.jpeg",
	},
	{
		id: "apis",
		url: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~87PA5BKDY67P/CERTIFICATE_LANDING_PAGE~87PA5BKDY67P.jpeg",
	},

	{
		id: "django web framework",
		url: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~9KKKXL9VQQJR/CERTIFICATE_LANDING_PAGE~9KKKXL9VQQJR.jpeg",
	},
];
