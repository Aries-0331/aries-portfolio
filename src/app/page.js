import { Montserrat, Luxurious_Roman } from "next/font/google";

import {
	Navbar,
	Hero,
	About,
	Projects,
	Contact,
	Footer,
	Achievements,
} from "./components";
import 'react-photo-view/dist/react-photo-view.css';

const montserrat = Montserrat({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-montserrat",
});

const luxurious_roman = Luxurious_Roman({
	subsets: ["latin"],
	weight: "400",
	display: "swap",
	variable: "--font-luxurious_roman",
});

export default function Home() {
	return (
		<main
			className={`relative flex min-h-screen flex-col items-center ${montserrat.className} ${luxurious_roman.className}`}
		>
			<Navbar />
			<div className="flex flex-col justify-center items-center w-full bg-[#f9f9f9]">
				<Hero />
				<About />
				<Projects />
				<Achievements />
				<Contact />
			</div>
			<Footer />
		</main>
	);
}
