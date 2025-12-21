# Implementation Plan

- [x] 1. Analyze current lint errors and create baseline

  - Run lint on all packages and capture current error counts by category
  - Document which packages have which types of errors
  - Create a baseline report for comparison
  - _Requirements: All_

- [x] 2. Fix digitaldefiance-suite-core-lib

  - [x] 2.1 Apply automated Prettier fixes

    - Run `nx run digitaldefiance-suite-core-lib:lint --fix`
    - Review and commit formatting changes
    - _Requirements: 1.1, 1.2, 1.3_

  - [x] 2.2 Fix explicit any types

    - Replace `any` types with proper TypeScript types
    - Add generic constraints where needed
    - Use `unknown` or `Record<string, unknown>` for truly dynamic types
    - _Requirements: 2.1, 2.2, 2.3_

  - [x] 2.3 Fix unused variables

    - Remove truly unused variables
    - Prefix required-but-unused parameters with underscore
    - _Requirements: 3.1, 3.2, 3.3_

  - [x] 2.4 Fix unsafe type operations

    - Add type guards for unsafe member access
    - Add type assertions for unsafe assignments
    - Properly type function calls
    - _Requirements: 4.1, 4.2, 4.3_

  - [x] 2.5 Validate digitaldefiance-suite-core-lib
    - Run `nx run digitaldefiance-suite-core-lib:lint` and verify zero errors
    - Run `nx run digitaldefiance-suite-core-lib:test` and verify all tests pass
    - Run `nx build digitaldefiance-suite-core-lib` and verify successful build
    - _Requirements: 6.1, 6.2, 6.3, 6.4_

- [x] 3. Fix digitaldefiance-i18n-lib

  - [x] 3.1 Apply automated Prettier fixes

    - Run `nx run digitaldefiance-i18n-lib:lint --fix`
    - Review and commit formatting changes
    - _Requirements: 1.1, 1.2, 1.3_

  - [x] 3.2 Fix explicit any types

    - Replace `any` types with proper TypeScript types
    - Add generic constraints where needed
    - Focus on translation function signatures
    - _Requirements: 2.1, 2.2, 2.3_

  - [x] 3.3 Fix unused variables

    - Remove truly unused variables
    - Prefix required-but-unused parameters with underscore
    - _Requirements: 3.1, 3.2, 3.3_

  - [x] 3.4 Fix unsafe type operations

    - Add type guards for unsafe member access
    - Add type assertions for unsafe assignments
    - Properly type function calls
    - _Requirements: 4.1, 4.2, 4.3_

  - [x] 3.5 Fix unsafe function types

    - Replace `Function` type with explicit function signatures
    - Add parameter and return types to function type definitions
    - _Requirements: 5.1, 5.2_

  - [x] 3.6 Validate digitaldefiance-i18n-lib
    - Run `nx run digitaldefiance-i18n-lib:lint` and verify zero errors
    - Run `nx run digitaldefiance-i18n-lib:test` and verify all tests pass
    - Run `nx build digitaldefiance-i18n-lib` and verify successful build
    - _Requirements: 6.1, 6.2, 6.3, 6.4_

- [x] 4. Fix digitaldefiance-ecies-lib

  - [x] 4.1 Apply automated Prettier fixes

    - Run `nx run digitaldefiance-ecies-lib:lint --fix`
    - Review and commit formatting changes
    - _Requirements: 1.1, 1.2, 1.3_

  - [x] 4.2 Fix explicit any types

    - Replace `any` types with proper TypeScript types
    - Add generic constraints where needed
    - _Requirements: 2.1, 2.2, 2.3_

  - [x] 4.3 Fix unused variables

    - Remove truly unused variables
    - Prefix required-but-unused parameters with underscore
    - _Requirements: 3.1, 3.2, 3.3_

  - [x] 4.4 Fix unsafe type operations

    - Add type guards for unsafe member access
    - Add type assertions for unsafe assignments
    - _Requirements: 4.1, 4.2, 4.3_

  - [x] 4.5 Validate digitaldefiance-ecies-lib
    - Run `nx run digitaldefiance-ecies-lib:lint` and verify zero errors
    - Run `nx run digitaldefiance-ecies-lib:test` and verify all tests pass
    - Run `nx build digitaldefiance-ecies-lib` and verify successful build
    - _Requirements: 6.1, 6.2, 6.3, 6.4_

- [x] 5. Fix digitaldefiance-node-ecies-lib

  - [x] 5.1 Apply automated Prettier fixes

    - Run `nx run digitaldefiance-node-ecies-lib:lint --fix`
    - Review and commit formatting changes
    - _Requirements: 1.1, 1.2, 1.3_

  - [x] 5.2 Fix explicit any types

    - Replace `any` types with proper TypeScript types
    - Add generic constraints where needed
    - _Requirements: 2.1, 2.2, 2.3_

  - [x] 5.3 Fix unused variables

    - Remove truly unused variables
    - Prefix required-but-unused parameters with underscore
    - _Requirements: 3.1, 3.2, 3.3_

  - [x] 5.4 Fix unsafe type operations

    - Add type guards for unsafe member access
    - Add type assertions for unsafe assignments
    - _Requirements: 4.1, 4.2, 4.3_

  - [x] 5.5 Validate digitaldefiance-node-ecies-lib
    - Run `nx run digitaldefiance-node-ecies-lib:lint` and verify zero errors
    - Run `nx run digitaldefiance-node-ecies-lib:test` and verify all tests pass
    - Run `nx build digitaldefiance-node-ecies-lib` and verify successful build
    - _Requirements: 6.1, 6.2, 6.3, 6.4_

- [x] 6. Fix digitaldefiance-express-suite-test-utils

  - [x] 6.1 Apply automated Prettier fixes

    - Run `nx run digitaldefiance-express-suite-test-utils:lint --fix`
    - Review and commit formatting changes
    - _Requirements: 1.1, 1.2, 1.3_

  - [x] 6.2 Fix explicit any types

    - Replace `any` types with proper TypeScript types
    - Add generic constraints where needed
    - _Requirements: 2.1, 2.2, 2.3_

  - [x] 6.3 Fix unused variables

    - Remove truly unused variables
    - Prefix required-but-unused parameters with underscore
    - _Requirements: 3.1, 3.2, 3.3_

  - [x] 6.4 Fix unsafe type operations

    - Add type guards for unsafe member access
    - Add type assertions for unsafe assignments
    - _Requirements: 4.1, 4.2, 4.3_

  - [x] 6.5 Validate digitaldefiance-express-suite-test-utils
    - Run `nx run digitaldefiance-express-suite-test-utils:lint` and verify zero errors
    - Run `nx run digitaldefiance-express-suite-test-utils:test` and verify all tests pass
    - Run `nx build digitaldefiance-express-suite-test-utils` and verify successful build
    - _Requirements: 6.1, 6.2, 6.3, 6.4_

- [-] 7. Fix digitaldefiance-express-suite-react-components

  - [x] 7.1 Apply automated Prettier fixes

    - Run `nx run digitaldefiance-express-suite-react-components:lint --fix`
    - Review and commit formatting changes
    - _Requirements: 1.1, 1.2, 1.3_

  - [x] 7.2 Fix explicit any types

    - Replace `any` types with proper TypeScript types
    - Add generic constraints where needed
    - _Requirements: 2.1, 2.2, 2.3_

  - [x] 7.3 Fix unused variables

    - Remove truly unused variables
    - Prefix required-but-unused parameters with underscore
    - _Requirements: 3.1, 3.2, 3.3_

  - [-] 7.4 Fix unsafe type operations

    - Add type guards for unsafe member access
    - Add type assertions for unsafe assignments
    - _Requirements: 4.1, 4.2, 4.3_

  - [x] 7.5 Validate digitaldefiance-express-suite-react-components
    - Run `nx run digitaldefiance-express-suite-react-components:lint` and verify zero errors
    - Run `nx run digitaldefiance-express-suite-react-components:test` and verify all tests pass
    - Run `nx build digitaldefiance-express-suite-react-components` and verify successful build
    - _Requirements: 6.1, 6.2, 6.3, 6.4_

- [x] 8. Fix digitaldefiance-node-express-suite

  - [x] 8.1 Apply automated Prettier fixes

    - Run `nx run digitaldefiance-node-express-suite:lint --fix`
    - Review and commit formatting changes
    - _Requirements: 1.1, 1.2, 1.3_

  - [x] 8.2 Fix explicit any types

    - Replace `any` types with proper TypeScript types
    - Add generic constraints where needed
    - _Requirements: 2.1, 2.2, 2.3_

  - [x] 8.3 Fix unused variables

    - Remove truly unused variables
    - Prefix required-but-unused parameters with underscore
    - _Requirements: 3.1, 3.2, 3.3_

  - [x] 8.4 Fix unsafe type operations

    - Add type guards for unsafe member access
    - Add type assertions for unsafe assignments
    - _Requirements: 4.1, 4.2, 4.3_

  - [x] 8.5 Validate digitaldefiance-node-express-suite
    - Run `nx run digitaldefiance-node-express-suite:lint` and verify zero errors
    - Run `nx run digitaldefiance-node-express-suite:test` and verify all tests pass
    - Run `nx build digitaldefiance-node-express-suite` and verify successful build
    - _Requirements: 6.1, 6.2, 6.3, 6.4_

- [ ] 9. Fix @express-suite/audit-tool

  - [ ] 9.1 Apply automated Prettier fixes

    - Run `nx run @express-suite/audit-tool:lint --fix`
    - Review and commit formatting changes
    - _Requirements: 1.1, 1.2, 1.3_

  - [ ] 9.2 Fix explicit any types

    - Replace `any` types with proper TypeScript types
    - Add generic constraints where needed
    - _Requirements: 2.1, 2.2, 2.3_

  - [ ] 9.3 Fix unused variables

    - Remove truly unused variables
    - Prefix required-but-unused parameters with underscore
    - _Requirements: 3.1, 3.2, 3.3_

  - [ ] 9.4 Fix unsafe type operations

    - Add type guards for unsafe member access
    - Add type assertions for unsafe assignments
    - _Requirements: 4.1, 4.2, 4.3_

  - [ ] 9.5 Validate @express-suite/audit-tool
    - Run `nx run @express-suite/audit-tool:lint` and verify zero errors
    - Run `nx run @express-suite/audit-tool:test` and verify all tests pass
    - Run `nx build @express-suite/audit-tool` and verify successful build
    - _Requirements: 6.1, 6.2, 6.3, 6.4_

- [ ] 10. Final validation across all packages
  - Run `nx run-many --target=lint --all` and verify zero errors across all packages
  - Run `nx run-many --target=test --all` and verify all tests pass
  - Run `nx run-many --target=build --all` and verify all builds succeed
  - Generate final report comparing before/after error counts
  - _Requirements: All_
