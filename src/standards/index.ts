import {
  StandardPlugin,
  StandardValueGeneratorBuilder,
} from '@falbricate/base';
import { CountryAs, RandomCountryGenerator } from '../generators';

export const standardsPlugin: StandardPlugin[] = [];

const add = (key: string, builder: StandardValueGeneratorBuilder) => {
  standardsPlugin.push({ key, builder });
};

const asPossibilities: CountryAs[] = ['object', 'name', 'abbr', 'capital'];
const regions = [
  // European
  'eu',
  'non-eu',
  'europe',
  'n-europe',
  's-europe',
  'e-europe',
  'w-europe',
];

asPossibilities.forEach((as) => {
  regions.forEach((region) => {
    add(
      `country-${as}-${region}`,
      () =>
        new RandomCountryGenerator({
          as,
          countries: region,
        }),
    );
  });
});
