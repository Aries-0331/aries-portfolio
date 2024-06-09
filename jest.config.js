module.exports = {
	testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
	setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
	testEnvironment: "jest-environment-jsdom",
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1",
	},
	transform: {
		"^.+\\.(js|jsx|ts|tsx)$": "@swc/jest",
	},
};
