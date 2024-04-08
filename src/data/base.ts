/** Type of geographical element */
export type GeographyType = 'country' | 'region';

/**
 * Declaration of all the geographical elements
 * with names and abbreviations assigned
 */
export type NamedGeography = {
  type: GeographyType;
  name: string;
  abbr: string;
};

/** Declaration of regions and groups */
export interface Region extends NamedGeography {
  subs: string[];
}

/** Declaration of single countries */
export interface Country extends NamedGeography {
  capital: string;
}

/** Declaration of a geography element being either Region or Country. */
export type GeographyElement = Region | Country;
