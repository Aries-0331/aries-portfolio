import Link from "next/link";
import React from "react";
import Image from "next/image";

const SocialIcon = ({ url, icon }) => {
	return (
		<div className="px-2">
			<Link href={url}>
				<Image src={icon} alt="icon" width={36} height={36} />
			</Link>
		</div>
	);
};

export default SocialIcon;
