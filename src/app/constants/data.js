import Link from "next/link";

export const hero_data = `I am a frontend developer with a passion for creating interactive and responsive web applications. I have experience working with
JavaScript, TypeScript, C++, React, Next.js, Redux, Tailwind, etc. I am
a quick learner and I am always looking to expand my knowledge and
skill set. I am a team player and I am excited to work with others
to create amazing applications.`;

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
		id: "portfolio",
		title: "Portfolio",
		description: "A portfolio website driven by CRA and SCSS.",
		cover: "/images/projects/portfolio.png",
		github: "https://github.com/Aries-0331/portfolio",
		preview: "https://aries-portfolio.vercel.app/",
	},
	{
		id: "next-portfolio",
		title: "Next Portfolio",
		description: "A portfolio website driven by Next.js, Tailwind and Vercel.",
		cover: "/images/projects/next-portfolio.png",
		github: "https://github.com/Aries-0331/next-portfolio",
		preview: "https://aries-portfolio.vercel.app/",
	},
	{
		id: "brainwave",
		title: "Brainwave",
		description:
			"Modern UI/UX website, developed using React.js and Tailwind CSS, exemplifies modern UI/UX principles.",
		cover: "/images/projects/brainwave.png",
		github: "https://github.com/Aries-0331/Brainwave",
		preview: "https://brainwave-ruddy-six.vercel.app/",
	},
	{
		id: "financial dashboard",
		title: "Financial Dashboard",
		description:
			"A finacial dashboard build with Next.js, Tailwind and Postgres.",
		cover: "/images/projects/dashboard.png",
		github: "https://github.com/Aries-0331/nextjs-dashboard",
		preview: "https://nextjs-dashboard-tau-two-25.vercel.app/",
	},
	{
		id: "react-kit",
		title: "React Kit",
		description:
			"A collection of React components and hooks build with Tailwind.",
		cover: "/images/projects/react-kit.png",
		github: "https://github.com/Aries-0331/react-kits",
		preview: "https://react-kits.vercel.app/",
	},
	{
		id: "prompthub",
		title: "PromptHub",
		description:
			"AI powered prompts hub web application build with Next.js, Tailwind and MongoDB.",
		cover: "/images/projects/prompthub.png",
		github: "https://github.com/Aries-0331/react-kits",
		preview: "https://react-kits.vercel.app/",
	},
];

export const social_data = [
	{
		id: "github",
		url: "https://www.github.com/Aries-0331",
		icon: "/github-icon.svg",
	},
	{
		id: "linkedin",
		url: "https://www.linkedin.com/in/aries0331",
		icon: "/linkedin-icon.svg",
	},
];
