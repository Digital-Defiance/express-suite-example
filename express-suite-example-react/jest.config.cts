module.exports = {
  displayName: 'express-suite-example-react',
  preset: '../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  transform: {
    '^(?!.*\\.(js|jsx|mjs|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.(ts|tsx)$': ['babel-jest', { presets: ['@nx/react/babel'] }],
    // react-router v8 (and allowlisted ESM deps) are shipped as ESM with a
    // dead `import.meta.hot` HMR guard; neutralize it and downlevel to CJS.
    '^.+\\.(js|jsx|mjs)$': '<rootDir>/src/esm-js-transformer.js',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'mjs'],
  // react-router v8 is ESM-only; let the transformer process it (and its ESM
  // deps) instead of jest's default "ignore everything in node_modules".
  transformIgnorePatterns: [
    'node_modules/(?!(.*\\.mjs$|react-router|@remix-run|cookie-es)/)',
  ],
  // The published @digitaldefiance/express-suite-react-components (4.x) still
  // requires 'react-router-dom'. In v7/v8 react-router-dom was merged into
  // react-router (same names/signatures), so redirect it here so the published
  // library shares the SAME router context the app's BrowserRouter creates.
  moduleNameMapper: {
    '^react-router-dom$': 'react-router',
  },
  coverageDirectory: '../coverage/express-suite-example-react',
};
