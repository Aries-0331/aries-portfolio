import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Icon from "./Icon";

test("renders Icon component", () => {
	const { getByAltText } = render(
		<Icon
			label="test"
			url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
			showLabel={false}
			onHover={() => {}}
		/>
	);
	const imageElement = getByAltText(/skill icon/i);
	expect(imageElement).toBeInTheDocument();
});

test("handle hover events", () => {
	const handleHover = jest.fn();
	const { getByAltText } = render(
		<Icon
			label="test"
			url="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
			showLabel={false}
			onHover={handleHover}
		/>
	);
	const imageElement = getByAltText(/skill icon/i);
	fireEvent.mouseEnter(imageElement);
	expect(handleHover).toBeCalledWith(true);
	fireEvent.mouseLeave(imageElement);
	expect(handleHover).toBeCalledWith(false);
});
