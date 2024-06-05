import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Certificates from "./components/Certificates";
import { Montserrat, Luxurious_Roman } from "next/font/google";

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
				<HeroSection />
				<AboutSection />
				<ProjectsSection />
				<Certificates />
				<ContactSection />
			</div>
			<Footer />
		</main>
	);
}
