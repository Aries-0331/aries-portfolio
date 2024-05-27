import React from "react";

const TabButton = ({ active, selectTab, label }) => {
	const labelColor = active ? "text-white" : "text-gray-400";
	return (
		<button onClick={selectTab}>
			<span className={`font-semibold hover:text-white ${labelColor}`}>
				{label}
			</span>
		</button>
	);
};

export default TabButton;
