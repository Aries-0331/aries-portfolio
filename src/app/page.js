import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Divider from "./components/Divider";
import Experiences from "./components/Experiences";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center  bg-[#F9F9F9] ">
			<Navbar />
			<div className="flex flex-col justify-center items-center max-w-[1440px] mt-24 mx-auto px-8 py-4">
				<HeroSection />
				<AboutSection />
				<ProjectsSection />
				<Experiences />
				<ContactSection />
			</div>
			<Footer />
		</main>
	);
}
