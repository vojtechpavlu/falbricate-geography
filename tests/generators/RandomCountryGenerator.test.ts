import { Country, RandomCountryConfig, RandomCountryGenerator } from '../../src';

describe('Random Country Generator', () => {
  it('should return a single country when region given', () => {
    const generator = new RandomCountryGenerator({
      countries: 'eu',
      as: 'object'
    })

    const country = generator.get() as Country;

    expect(Array.isArray(country)).toBe(false);
    expect(country).not.toBeUndefined();
    expect(country.type).toBe('country')
  });

  it('should return the country when single country given', () => {
    const generator = new RandomCountryGenerator({
      countries: 'no',
      as: 'object'
    })

    const country = generator.get() as Country;

    expect(Array.isArray(country)).toBe(false);
    expect(country).not.toBeUndefined();
    expect(country.type).toBe('country');
    expect(country.abbr).toBe('no');
  });

  it('should return name of the country', () => {
    const generator = new RandomCountryGenerator({
      countries: 'no',
      as: 'name'
    })

    const country = generator.get() as Country;
    expect(country).toBe('Norway');
  });

  it('should return abbreviation of the country', () => {
    const generator = new RandomCountryGenerator({
      countries: 'no',
      as: 'abbr'
    })

    const country = generator.get() as Country;
    expect(country).toBe('no');
  });

  it('should return capital of the country', () => {
    const generator = new RandomCountryGenerator({
      countries: 'no',
      as: 'capital'
    })

    const country = generator.get() as Country;
    expect(country).toBe('Oslo');
  });

  it('should return name of the country by default', () => {
    const generator = new RandomCountryGenerator({
      countries: 'no'
    })

    const country = generator.get() as Country;
    expect(country).toBe('Norway');
  });

  it('should return a country from given list', () => {
    const config: RandomCountryConfig = {
      countries: ['no', 'se'],
      as: 'abbr'
    }

    const generator = new RandomCountryGenerator(config)

    const country = generator.get() as Country;
    expect(config.countries).toContain(country);
  });
});
