module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/templates/', '/test-*'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  testRegex: '\\.(spec)\\.ts$',
};
