# Lint Errors Baseline Report

**Generated:** December 15, 2025  
**Command:** `npx nx run-many --target=lint --all --parallel=1`

## Executive Summary

Total packages analyzed: **9 packages**

- **8 packages** with lint errors
- **1 package** (digitaldefiance-mongoose-types) has no linting configured

## Error Count by Package

### 1. digitaldefiance-express-suite-test-utils

- **Total Errors:** 44
- **Status:** ✖ 44 problems (44 errors, 0 warnings)

### 2. digitaldefiance-i18n-lib

- **Total Errors:** 388+ (output truncated)
- **Status:** ✖ Multiple errors across many files

### 3. digitaldefiance-ecies-lib

- **Total Errors:** 200+ (output truncated)
- **Status:** ✖ Multiple errors across many files

### 4. digitaldefiance-node-ecies-lib

- **Total Errors:** 300+ (output truncated)
- **Status:** ✖ Multiple errors across many files

### 5. digitaldefiance-suite-core-lib

- **Total Errors:** 400+ (output truncated)
- **Status:** ✖ Multiple errors across many files

### 6. digitaldefiance-express-suite-react-components

- **Status:** Not reached in output (command timed out)

### 7. digitaldefiance-node-express-suite

- **Status:** Not reached in output (command timed out)

### 8. @express-suite/audit-tool

- **Status:** Not reached in output (command timed out)

### 9. digitaldefiance-mongoose-types

- **Status:** ✓ No linting configured (types-only package)

## Error Categories Breakdown

### Prettier Formatting Errors (~40%)

- Insert/Delete whitespace
- Line break inconsistencies
- Import ordering violations
- Trailing commas

**Examples:**

- `error  Insert ⏎  prettier/prettier`
- `error  Delete ··  prettier/prettier`
- `error  Replace 'x' with 'y'  prettier/prettier`

### Explicit Any Types (~30%)

- `@typescript-eslint/no-explicit-any`
- Function parameters typed as `any`
- Generic type parameters using `any`
- Variable declarations with `any`

**Examples:**

- `error  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any`

### Unsafe Type Operations (~20%)

- `@typescript-eslint/no-unsafe-assignment`
- `@typescript-eslint/no-unsafe-member-access`
- `@typescript-eslint/no-unsafe-call`
- `@typescript-eslint/no-unsafe-return`
- `@typescript-eslint/no-unsafe-argument`

**Examples:**

- `error  Unsafe assignment of an any value  @typescript-eslint/no-unsafe-assignment`
- `error  Unsafe member access .x on an any value  @typescript-eslint/no-unsafe-member-access`

### Unused Variables (~8%)

- `@typescript-eslint/no-unused-vars`
- Unused function parameters
- Unused imports
- Unused catch block parameters

**Examples:**

- `error  'variable' is defined but never used  @typescript-eslint/no-unused-vars`

### Import Order Violations (~5%)

- `import/order`
- Incorrect import statement ordering

**Examples:**

- `error  'x' import should occur before import of 'y'  import/order`

### Other Errors (~2%)

- `@typescript-eslint/no-unsafe-function-type`
- `@typescript-eslint/no-require-imports`
- `@typescript-eslint/no-namespace`
- `@typescript-eslint/triple-slash-reference`
- `import/export` (multiple exports)
- `import/no-duplicates`

## Detailed Package Analysis

### digitaldefiance-express-suite-test-utils (44 errors)

**File Distribution:**

- `src/lib/direct-log.ts`: 6 errors
- `tests/__mocks__/@digitaldefiance/mongoose-types.ts`: 12 errors
- `tests/__mocks__/mongoose.ts`: 12 errors
- `tests/direct-log.spec.ts`: 6 errors
- `tests/to-throw-type.spec.ts`: 2 errors
- `.d.ts` files: 8 parsing errors

**Primary Issues:**

- Parsing errors in `.d.ts` files (keyword 'export'/'import' is reserved)
- Unsafe type operations in mock files
- `@typescript-eslint/no-require-imports` violations
- Explicit `any` types in test files

### digitaldefiance-i18n-lib (388+ errors)

**Most Affected Files:**

- `src/core/i18n-engine.ts`: 80+ errors
- `src/icu/compiler.ts`: 50+ errors
- `src/icu/parser.ts`: 40+ errors
- `src/icu/tokenizer.ts`: 40+ errors
- `src/errors/enhanced-error-base.ts`: 30+ errors
- Translation files (`src/strings/*.ts`): 200+ formatting errors

**Primary Issues:**

- Massive Prettier formatting violations in translation files
- Unsafe type operations throughout
- Explicit `any` types in core engine
- Import order violations
- Multiple export violations in `src/index.ts`

### digitaldefiance-ecies-lib (200+ errors)

**Most Affected Files:**

- `src/lib/guid.ts`: 50+ errors
- `src/services/ecies/multi-recipient.ts`: 40+ errors
- `src/errors/*.ts`: 30+ errors
- `src/i18n-setup.ts`: 20+ errors

**Primary Issues:**

- Prettier formatting (especially in guid.ts)
- Import order violations
- Multiple export violations in index files
- Explicit `any` types

### digitaldefiance-node-ecies-lib (300+ errors)

**Most Affected Files:**

- `src/i18n/translations/*.ts`: 150+ errors (formatting)
- `src/i18n/ecies-i18n-factory.ts`: 30+ errors
- `src/services/*.ts`: 50+ errors
- `src/lib/invariants/*.ts`: 20+ errors

**Primary Issues:**

- Translation files have massive formatting issues
- Import order violations throughout
- Unsafe type operations in services
- Explicit `any` types

### digitaldefiance-suite-core-lib (400+ errors)

**Most Affected Files:**

- `src/lib/flags.ts`: 250+ errors (all formatting)
- `src/errors/*.ts`: 80+ errors
- `tests/backup-code-string.spec.ts`: 200+ errors
- `src/i18n-setup.ts`: 20+ errors

**Primary Issues:**

- `src/lib/flags.ts` has 250+ identical formatting errors (quote style)
- Error classes have import order and formatting issues
- Test files have extensive unsafe type operations
- Multiple export violations

## Recommendations

### Phase 1: Automated Fixes (Low Risk)

1. Run `--fix` flag on all packages to auto-fix Prettier issues
2. This should resolve ~40% of errors immediately

### Phase 2: Manual Type Safety Fixes (Medium Risk)

1. Replace explicit `any` types with proper types
2. Add type guards for unsafe operations
3. Fix unused variables

### Phase 3: Validation (Critical)

1. Run tests after each package is fixed
2. Verify builds succeed
3. Ensure no functionality is broken

## Notes

- Command timed out after 120 seconds
- Not all packages were fully analyzed
- Actual error count may be higher than reported
- Many errors are auto-fixable with `--fix` flag
