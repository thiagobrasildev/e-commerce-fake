const nextJest = require("next/jest.js");

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('jest').Config} */
const config = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  preset: "ts-jest",
  transformIgnorePatterns: [
    "/node_modules/(?!(swiper)/)",
    "/node_modules/(?!(framer-motion)/)",
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};

module.exports = createJestConfig(config);
