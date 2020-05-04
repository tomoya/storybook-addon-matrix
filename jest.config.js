module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom-fourteen',
  cacheDirectory: '.cache/jest',
  testMatch: ['**/*.test.ts?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/example/'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['./scripts/jest.init.ts'],
};
