import { FalbricatePlugin } from '@falbricate/base';
import {
  RandomCountryConfig,
  RandomCountryGenerator,
  RandomLanguageOfCountryConfig,
  RandomLanguageOfCountryGenerator
} from './generators';
import { standardsPlugin } from './standards';

export const GeographyPlugin = (): FalbricatePlugin => ({
  valueGenerators: [
    {
      key: 'random-country',
      builder: (config: RandomCountryConfig) =>
        new RandomCountryGenerator(config)
    }, {
      key: 'random-language-of-country',
      builder: (config: RandomLanguageOfCountryConfig) =>
        new RandomLanguageOfCountryGenerator(config)
    }
  ],
  standards: standardsPlugin
});

export * from './data';
export * from './generators';
export * from './standards';
