import { createI18nStringKeys } from '@digitaldefiance/i18n-lib';

/**
 * Branded string keys for the DigitaldefianceExpressSuiteExample component.
 *
 * Created using `createI18nStringKeys` for type-safe i18n support.
 * Use `typeof DigitaldefianceExpressSuiteExampleStringKey` when referencing the type.
 *
 * @example
 * ```typescript
 * import { DigitaldefianceExpressSuiteExampleStringKey } from './enumerations/digitaldefiance-express-suite-example-string-key';
 * import type { BrandedStringsCollection } from '@digitaldefiance/i18n-lib';
 *
 * const strings: BrandedStringsCollection<typeof DigitaldefianceExpressSuiteExampleStringKey> = {
 *   [DigitaldefianceExpressSuiteExampleStringKey.SiteTitle]: 'My Site',
 * };
 * ```
 */
export const DigitaldefianceExpressSuiteExampleStringKey = createI18nStringKeys('DigitaldefianceExpressSuiteExample', {
  SiteTitle: 'siteTitle',
  SiteDescription: 'siteDescription',
  SiteTagline: 'siteTagline',
} as const);

/**
 * Type alias for the branded string key values.
 * Use this when you need to type a variable that holds a string key value.
 */
export type DigitaldefianceExpressSuiteExampleStringKeyValue = typeof DigitaldefianceExpressSuiteExampleStringKey[keyof typeof DigitaldefianceExpressSuiteExampleStringKey];
