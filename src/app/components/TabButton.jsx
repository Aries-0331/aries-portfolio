import React from "react";

const TabButton = ({ active, selectTab, label }) => {
	return (
		<button
			onClick={selectTab}
			className="w-full h-full hover:bg-gray-300 cursor-pointer"
		>
			<span className="font-semibold">{label}</span>
		</button>
	);
};

export default TabButton;
