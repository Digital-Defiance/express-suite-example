/**
 * Global ambient type declarations for Error and globalThis extensions
 *
 * This file extends standard TypeScript interfaces to support additional
 * properties and methods used throughout the Digital Defiance monorepo.
 */

/**
 * Extend global interfaces for Error and globalThis
 */
declare global {
  /**
   * Extend Error constructor interface to include V8's captureStackTrace method
   * This is available in Node.js and V8-based environments
   */
  interface ErrorConstructor {
    /**
     * Create a .stack property on the provided targetObject
     * @param targetObject - Object to capture stack trace for
     * @param constructorOpt - Optional constructor function to hide from stack trace
     */
    captureStackTrace(targetObject: object, constructorOpt?: Function): void;
  }

  /**
   * Extend Error instance interface to include custom properties
   * used for enhanced error handling throughout the codebase
   *
   * Note: The 'cause' property is already defined in ES2022 Error interface
   */
  interface Error {
    /**
     * Timestamp when error was disposed (for resource cleanup tracking)
     */
    disposedAt?: string;

    /**
     * Error type classification (e.g., 'validation', 'network', 'auth')
     */
    type?: string;

    /**
     * Component identifier where the error originated
     */
    componentId?: string;

    /**
     * Map of reasons or context for the error
     */
    reasonMap?: Record<string, unknown>;

    /**
     * Additional metadata associated with the error
     */
    metadata?: Record<string, unknown>;
  }

  /**
   * Global active context for tracking application state
   * TODO: Define proper type based on actual usage patterns
   */
  var GlobalActiveContext: any;
}

// This export statement is required to make this file a module
// and ensure the global augmentation works correctly
export {};
