import { Country, getGeography, RandomLanguageOfCountryConfig, RandomLanguageOfCountryGenerator } from '../../src';

describe('RandomLanguageOfCountryGenerator', () => {
  it('should select a single language', () => {
    const config: RandomLanguageOfCountryConfig = {
      countries: ['ba'],
      languagesAs: 'single'
    };

    const generator = new RandomLanguageOfCountryGenerator(config);
    expect(typeof generator.generate()).toBe('string');
  });

  it('should select a subset languages', () => {
    const config: RandomLanguageOfCountryConfig = {
      countries: ['ba'],
      languagesAs: 'subset'
    };

    const generator = new RandomLanguageOfCountryGenerator(config);
    const generated = generator.generate();
    const country = getGeography('ba') as Country[];

    expect(Array.isArray(generated)).toBe(true);
    expect(generated.length).toBeLessThanOrEqual(country[0]!.languages.length);
    expect(generated.length).toBeGreaterThanOrEqual(0);
  });

  it('should select a subset languages', () => {
    const config: RandomLanguageOfCountryConfig = {
      countries: ['ba'],
      languagesAs: 'all'
    };

    const generator = new RandomLanguageOfCountryGenerator(config);
    const generated = generator.generate();
    const country = getGeography('ba') as Country[];

    expect(Array.isArray(generated)).toBe(true);
    expect(generated.length).toBe(country[0]!.languages.length);
  });
});
