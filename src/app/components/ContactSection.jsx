"use client";
import { useState } from "react";

const ContactSection = () => {
	const [emailSubmitted, setEmailSubmitted] = useState(false);
	const handleSubmit = async (e) => {
		e.preventDefault();

		const data = {
			email: e.target.email.value,
			subject: e.target.subject.value,
			message: e.target.message.value,
		};

		const jsonData = JSON.stringify(data);

		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: jsonData,
		};

		const response = await fetch("/api/send", options);
		const res = await response.json();

		if (response.status === 200) {
			console.log("Message sent.");
			setEmailSubmitted(true);
		}
	};
	return (
		<section id="contact" className="mt-16">
			<h2 className="flex justify-center text-4xl text-white font-bold">
				Contact Me
			</h2>

			<div className="flex flex-col items-center my-6">
				<form onSubmit={handleSubmit}>
					<label htmlFor="email" className="block text-sm text-white py-2">
						Your Email
					</label>
					<input
						id="email"
						type="email"
						name="email"
						required
						placeholder="example@email.com"
						className="bg-[#18191e] text-gray-100 border border-[#33353f] placeholder-slate-400 rounded-md px-2 py-1 w-full"
					/>
					<label htmlFor="subject" className="block text-sm text-white py-2">
						Subject
					</label>
					<input
						id="subject"
						type="text"
						name="subject"
						required
						placeholder="Just say hi!"
						className="bg-[#18191e] text-gray-100 border border-[#33353f] placeholder-slate-400 rounded-md px-2 py-1 w-full"
					/>
					<label className="block text-sm text-white py-2">Message</label>
					<textarea
						id="message"
						name="message"
						required
						placeholder="How was your day?"
						className="bg-[#18191e] text-gray-100 border border-[#33353f] placeholder-slate-400 rounded-md px-2 py-1 w-full"
					/>
					<button
						type="submit"
						className="w-full bg-[#CC8F6C] text-gray-100 border-2 rounded-md border-[#CC8F6C] text-md py-1 mt-2"
					>
						Send Message
					</button>
				</form>
				{emailSubmitted && (
					<h3 className="mt-2 text-sm  text-green-400 font-semibold">
						Message sent successfully!
					</h3>
				)}
			</div>
		</section>
	);
};

export default ContactSection;
