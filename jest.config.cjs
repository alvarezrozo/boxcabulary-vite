module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest',
  moduleNameMapper: {
    '\\.(scss|less)$': '<rootDir>/src/test/__mocks__/styleMock.js',
  }
}