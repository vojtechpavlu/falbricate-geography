import {
  GeneratedValue, randomInteger,
  randomItemFromArray, randomSampleFromArray,
  ValueGenerator,
  ValueGeneratorConfig
} from '@falbricate/base';
import { Country, getGeography } from '../data';

export type RandomLanguagesAs = 'single' | 'all' | 'subset';

export type RandomLanguageOfCountryConfig = {
  countries: string | string[];
  languagesAs: RandomLanguagesAs
} & ValueGeneratorConfig & any;

export class RandomLanguageOfCountryGenerator extends ValueGenerator<
  GeneratedValue,
  RandomLanguageOfCountryConfig
> {
  private readonly countries: Country[];

  constructor(config: RandomLanguageOfCountryConfig) {
    if (!config.countries) {
      throw new Error(`Property 'countries' is required`);
    }

    config.languagesAs = config.languagesAs ?? 'single';

    super(config);

    if (typeof this.config.countries === 'string') {
      this.countries = getGeography(this.config.countries);
    } else if (Array.isArray(this.config.countries)) {
      const countries: Country[] = [];

      this.config.countries.forEach((geography: string) => {
        getGeography(geography).forEach((c) => countries.push(c));
      });

      this.countries = [...new Set(countries)];
    } else {
      throw new Error(
        `Unexpected type of countries specification: ` +
          `'${this.config.countries}'`,
      );
    }
  }

  get = () => {
    const country: Country = randomItemFromArray(this.countries);

    switch (this.config.languagesAs) {
      case 'single': return randomItemFromArray(country.languages);
      case 'all': return country.languages;
      case 'subset':
        const nItems = randomInteger(1, country.languages.length);
        return randomSampleFromArray(country.languages, nItems);

      default:
        throw new Error(`Unknown value for property '${this.config.languagesAs}'`)
    }
  };
}
