import { addGeography, Country, getGeography, Region } from '../../src';

describe('getGeography function', () => {
  it('should return an array of countries for given region', () => {
    const region = 'europe';
    expect(Array.isArray(getGeography(region))).toBe(true);
  });

  it('should return an array of countries for given country', () => {
    const country = 'uk';
    expect(Array.isArray(getGeography(country))).toBe(true);
  });

  it('should return an array of single item for country', () => {
    const country = 'uk';
    expect(getGeography(country).length).toBe(1);
  });

  it('should return an expected country', () => {
    const country = 'uk';
    expect(getGeography(country)[0]!.name).toBe('United Kingdom');
  });

  it('should be able to add another country', () => {
    const country: Country = {
      type: 'country',
      name: 'Gondor',
      capital: 'Minas Tirith',
      abbr: 'gndr',
    };

    addGeography(country);

    expect(() => getGeography('gndr')).not.toThrow();
    expect(getGeography('gndr')[0]).not.toBeUndefined();
    expect(getGeography('gndr')[0]!.name).toBe('Gondor');
  });

  it('should be able to add another region', () => {
    const countries: Country[] = [
      {
        type: 'country',
        name: 'Gondor',
        capital: 'Minas Tirith',
        abbr: 'gondor',
      },
      { type: 'country', name: 'Rohan', capital: 'Edoras', abbr: 'rohan' },
      {
        type: 'country',
        name: 'Rivendell',
        capital: 'Rivendell',
        abbr: 'rivendell',
      },
    ];

    const middleEarth: Region = {
      type: 'region',
      abbr: 'middle-earth-region',
      name: 'Middle Earth',
      subs: ['gondor', 'rohan', 'rivendell'],
    };

    countries.forEach((c) => addGeography(c));
    addGeography(middleEarth);

    expect(() => getGeography(middleEarth.abbr)).not.toThrow();
    expect(getGeography(middleEarth.abbr).length).toBe(3);
  });
});
