import type { Config } from 'jest';

const config: Config = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/jest/tests/**/*.test.ts'],
    globalSetup: '<rootDir>/jest/hooks/jest-global-setup.ts',
    verbose: true
};

export default config;
