import {Country, GeographyElement, NamedGeography, Region} from "./base";
import { EUROPEAN_COUNTRIES } from './countries';
import { EUROPEAN_REGIONS } from './regions';

/** Declaration of a registry for geographical elements */
export interface GeographyRegistry {
  [abbr: string]: NamedGeography;
}

/** Declaration of an internal registry */
const REGISTRY: GeographyRegistry = {};

/**
 * Returns if the given name is registered for
 * @param abbr
 */
export const hasGeographyAbbreviation = (abbr: string): boolean => {
  return allGeographyAbbreviations().includes(abbr);
}

export const allGeographyAbbreviations = (): string[] => {
  return Object.keys(REGISTRY)
}

export const addGeography = (geography: GeographyElement) => {
  if (allGeographyAbbreviations().includes(geography.abbr)) {
    throw new Error(`Geography region with abbreviation '${geography.abbr}' already exists`);
  }

  if (geography.type === 'region') {
    geography = geography as Region
    if (!geography.subs || !Array.isArray(geography.subs)) {
      throw new Error(`Region's subregions must be a non-empty array`);
    }
  } else if (geography.type === 'country') {
    geography = geography as Country
    if (!geography.capital) {
      throw new Error(`Country has to have a capital city assigned`);
    }
  }

  REGISTRY[geography.abbr] = geography;
};

export const getGeography = (abbreviation: string): Country[] => {
  const geography = REGISTRY[abbreviation];

  if (!geography) {
    throw new Error(`No geography for '${abbreviation}' was found`);
  }

  if (geography.type === 'region') {
    const region = geography as Region;
    const result: Country[] = [];

    region.subs
      .map((subregion) => getGeography(subregion))
      .map((subregion) => {
        return subregion
      })
      .forEach((subregion) => {
        subregion.forEach((country) => result.push(country));
      })

    return [...new Set(result)]
  } else if (geography.type === 'country') {
    const country = geography as Country;
    return [country];
  } else {
    throw new Error(`Unknown geography type: '${geography.type}'`);
  }
};

[
  // Register countries
  ...EUROPEAN_COUNTRIES,

  // Register Regions
  ...EUROPEAN_REGIONS
].forEach((region) => addGeography(region));
