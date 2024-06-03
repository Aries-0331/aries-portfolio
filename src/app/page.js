import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center  bg-[#F9F9F9] ">
			<Navbar />
			<div className="md:max-w-[1000px] mt-24 mx-auto px-8 py-4">
				<HeroSection />
				<AboutSection />
				<ProjectsSection />
				<ContactSection />
			</div>
			<Footer />
		</main>
	);
}
