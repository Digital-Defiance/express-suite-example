import { spawnSync } from 'child_process';

/**
 * Loads node-express-suite in a plain Node process, outside Jest's module
 * transform. A broken install (for example a duplicate or outdated
 * @digitaldefiance/i18n-lib) makes the require throw at import time.
 */
describe('node-express-suite install smoke test', () => {
  it('loads in a plain node process', () => {
    const result = spawnSync(
      process.execPath,
      [
        '-e',
        "const s = require('@digitaldefiance/node-express-suite'); if (typeof s.Application !== 'function') process.exit(2);",
      ],
      { cwd: __dirname, encoding: 'utf8' },
    );
    expect(result.stderr).toBe('');
    expect(result.status).toBe(0);
  });
});
