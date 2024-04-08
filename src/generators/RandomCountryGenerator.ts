import { GeneratedValue, randomItemFromArray, ValueGenerator, ValueGeneratorConfig } from '@falbricate/base';
import { Country, getGeography } from '../data';

export type CountryAs = 'object' | 'name' | 'abbr' | 'capital'

export type RandomCountryConfig = {
  countries: string;
  as: CountryAs;
} & ValueGeneratorConfig & any;

export class RandomCountryGenerator extends ValueGenerator<
  GeneratedValue,
  RandomCountryConfig
> {

  private readonly countries: Country[]

  constructor(config: RandomCountryConfig) {
    if (!config.countries) {
      throw new Error(`Property 'countries' is required`)
    }

    config.as = config.as ?? 'name'

    super(config);

    this.countries = getGeography(this.config.countries)
  }

  get = () => {
    const country: Country = randomItemFromArray(this.countries);

    switch (this.config.as) {
      case 'object': return country
      case 'name': return country.name
      case 'abbr': return country.abbr
      case 'capital': return country.capital

      default:
        throw new Error(`Unknown type of country property: '${this.config.as}'`)
    }
  }
}