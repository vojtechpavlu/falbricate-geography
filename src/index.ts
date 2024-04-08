import { FalbricatePlugin } from '@falbricate/base';
import { RandomCountryConfig, RandomCountryGenerator } from './generators';
import { standardsPlugin } from './standards';

export const GeographyPlugin = (): FalbricatePlugin => ({
  valueGenerators: [
    {
      key: 'random-country',
      builder: (config: RandomCountryConfig) =>
        new RandomCountryGenerator(config),
    },
  ],
  standards: standardsPlugin,
});

export * from './data';
export * from './generators';
export * from './standards';
