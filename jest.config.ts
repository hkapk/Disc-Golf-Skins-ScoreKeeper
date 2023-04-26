import type { JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
  testEnvironment: "jsdom",
  preset: "ts-jest/presets/default",
};

export default jestConfig;
