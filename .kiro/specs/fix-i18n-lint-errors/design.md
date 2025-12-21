# Design Document: Fix Monorepo Lint Errors

## Overview

This design outlines a systematic approach to fixing 388 lint errors across 9 packages in the monorepo. The strategy prioritizes automated fixes where safe, followed by manual fixes for complex type safety issues, while ensuring no functionality is broken.

The affected packages are:

- digitaldefiance-i18n-lib (largest number of errors)
- digitaldefiance-ecies-lib
- digitaldefiance-node-ecies-lib
- digitaldefiance-suite-core-lib
- digitaldefiance-express-suite-test-utils
- digitaldefiance-express-suite-react-components
- digitaldefiance-node-express-suite
- @express-suite/audit-tool
- digitaldefiance-mongoose-types (no linting configured)

## Architecture

### Phased Approach

The fix process will follow a three-phase approach:

1. **Phase 1: Automated Fixes** - Use ESLint's `--fix` flag to automatically resolve formatting and simple issues
2. **Phase 2: Type Safety Fixes** - Manually fix `any` types and unsafe operations with proper TypeScript types
3. **Phase 3: Validation** - Run tests and builds to ensure no functionality was broken

### Package Processing Order

Packages will be processed in dependency order (leaf packages first) to minimize cascading issues:

1. digitaldefiance-suite-core-lib (core utilities)
2. digitaldefiance-i18n-lib (internationalization)
3. digitaldefiance-ecies-lib (encryption - browser)
4. digitaldefiance-node-ecies-lib (encryption - Node.js)
5. digitaldefiance-express-suite-test-utils (test utilities)
6. digitaldefiance-express-suite-react-components (React components)
7. digitaldefiance-node-express-suite (Express backend)
8. @express-suite/audit-tool (audit tooling)

## Components and Interfaces

### Lint Error Categories

Based on the lint output, errors fall into these categories:

1. **Prettier Formatting** (~40% of errors)

   - Spacing issues
   - Line break inconsistencies
   - Import ordering
   - Trailing commas

2. **Explicit Any Types** (~30% of errors)

   - Function parameters typed as `any`
   - Generic type parameters using `any`
   - Variable declarations with `any`

3. **Unsafe Type Operations** (~20% of errors)

   - Unsafe assignments
   - Unsafe member access
   - Unsafe function calls
   - Unsafe returns

4. **Unused Variables** (~8% of errors)

   - Unused function parameters
   - Unused catch block parameters
   - Unused imports

5. **Other** (~2% of errors)
   - Unsafe function types
   - Import order violations

### Fix Strategies by Category

#### Prettier Formatting

- **Strategy**: Run `nx run <package>:lint --fix` to auto-fix
- **Risk**: Low - Prettier changes are purely cosmetic
- **Validation**: Visual inspection of diffs

#### Explicit Any Types

- **Strategy**: Replace with proper types based on context
  - Function parameters: Infer from usage or add generic constraints
  - Variables: Use TypeScript's type inference or explicit interfaces
  - Generics: Add proper type constraints (e.g., `Record<string, unknown>` instead of `Record<string, any>`)
- **Risk**: Medium - Requires understanding of code intent
- **Validation**: TypeScript compilation + unit tests

#### Unsafe Type Operations

- **Strategy**: Add type guards, assertions, or proper typing
  - Unsafe assignments: Add type assertions or narrow types
  - Unsafe member access: Add optional chaining or type guards
  - Unsafe calls: Ensure proper function typing
- **Risk**: Medium-High - May reveal actual type bugs
- **Validation**: TypeScript compilation + unit tests + manual testing

#### Unused Variables

- **Strategy**: Remove if truly unused, prefix with `_` if required by interface
  - Catch parameters: Prefix with `_error`
  - Function parameters: Remove if not part of interface, otherwise prefix with `_`
- **Risk**: Low - Unused code removal is safe
- **Validation**: TypeScript compilation

## Data Models

### Lint Error Record

```typescript
interface LintError {
  file: string;
  line: number;
  column: number;
  rule: string;
  message: string;
  severity: 'error' | 'warning';
  fixable: boolean;
}
```

### Package Lint Status

```typescript
interface PackageLintStatus {
  packageName: string;
  totalErrors: number;
  errorsByCategory: Record<string, number>;
  autoFixableCount: number;
  manualFixCount: number;
  status: 'pending' | 'in-progress' | 'fixed' | 'validated';
}
```

## Error Handling

### Compilation Errors After Fixes

If TypeScript compilation fails after applying fixes:

1. Revert the specific file causing the error
2. Analyze the error message
3. Apply a more conservative fix
4. Re-run compilation

### Test Failures After Fixes

If tests fail after applying fixes:

1. Identify which fix caused the failure
2. Revert that specific fix
3. Analyze why the fix broke functionality
4. Apply an alternative fix that preserves behavior
5. Re-run tests

### Build Failures

If the build process fails:

1. Check for circular dependencies introduced by import reordering
2. Check for missing type exports
3. Revert problematic changes
4. Apply fixes more conservatively

## Testing Strategy

### Unit Testing

- Run existing unit tests after each package is fixed
- Tests must pass with same coverage as before
- No new tests required (this is a refactoring effort)

### Integration Testing

- Run integration tests after all packages are fixed
- Ensure cross-package functionality still works
- Verify no runtime errors introduced

### Build Validation

- Run `nx build <package>` for each fixed package
- Ensure all packages build successfully
- Verify dist outputs are generated correctly

### Lint Validation

- Run `nx run <package>:lint` after fixes
- Verify zero errors reported
- Ensure no new warnings introduced

## Correctness Properties

_A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees._

### Property 1: Prettier compliance

_For any_ package in the monorepo, after applying lint fixes, running the linter should report zero Prettier-related errors (prettier/prettier rule violations).

**Validates: Requirements 1.1, 1.2, 1.3, 1.4**

### Property 2: No explicit any types

_For any_ package in the monorepo, after applying type fixes, running the linter should report zero `@typescript-eslint/no-explicit-any` errors.

**Validates: Requirements 2.4**

### Property 3: No unused variables

_For any_ package in the monorepo, after applying fixes, running the linter should report zero `@typescript-eslint/no-unused-vars` errors.

**Validates: Requirements 3.1, 3.2, 3.4**

### Property 4: No unsafe operations

_For any_ package in the monorepo, after applying type safety fixes, running the linter should report zero unsafe operation errors (no-unsafe-assignment, no-unsafe-member-access, no-unsafe-call, no-unsafe-return).

**Validates: Requirements 4.4**

### Property 5: No unsafe function types

_For any_ package in the monorepo, after applying fixes, running the linter should report zero `@typescript-eslint/no-unsafe-function-type` errors.

**Validates: Requirements 5.3**

### Property 6: Tests pass after fixes

_For any_ package in the monorepo, after applying all lint fixes, running the test suite should result in all tests passing with the same pass rate as before fixes.

**Validates: Requirements 6.2**

### Property 7: Build succeeds after fixes

_For any_ package in the monorepo, after applying all lint fixes, running the build process should complete successfully without errors.

**Validates: Requirements 6.3**
