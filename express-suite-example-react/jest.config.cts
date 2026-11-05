module.exports = {
  displayName: 'express-suite-example-react',
  preset: '../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  transform: {
    '^(?!.*\\.(js|jsx|mjs|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    // Compile TS/TSX from the app and from @digitaldefiance workspace packages
    // that resolve to their TypeScript source through the monorepo.
    '^.+\\.(ts|tsx)$': ['babel-jest', { presets: ['@nx/react/babel'] }],
    // react-router v8 (and allowlisted ESM deps) are shipped as ESM with a
    // dead `import.meta.hot` HMR guard; neutralize it and downlevel to CJS.
    '^.+\\.(js|jsx|mjs)$': '<rootDir>/src/esm-js-transformer.js',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'mjs'],
  // react-router v8 is ESM-only, and the @digitaldefiance workspace packages
  // resolve to their raw TS source; let jest transform those instead of its
  // default "ignore everything in node_modules".
  transformIgnorePatterns: [
    'node_modules/(?!(.*\\.mjs$|react-router|@remix-run|cookie-es|@digitaldefiance|uuid)/)',
  ],
  coverageDirectory: '../coverage/express-suite-example-react',
};
