import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Certificates from "./components/Certificates";

export default function Home() {
	return (
		<main className="relative flex min-h-screen flex-col items-center">
			<Navbar />
			<div className="absolute top-[80px] flex flex-col justify-center items-center w-full ">
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
