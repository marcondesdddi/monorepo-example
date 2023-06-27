module.exports = {
  roots: ["<rootDir>/src", "<rootDir>/tests"],
  testMatch: ["**/*.spec.ts"],
  moduleNameMapper: {
    "@/tests/(.+)": "<rootDir>/tests/$1",
    "@/(.+)": "<rootDir>/src/$1"
  },
  clearMocks: true,
  setupFiles: ["dotenv/config"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  }
}
