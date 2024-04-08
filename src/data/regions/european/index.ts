import { Region } from '../../base';

export const EUROPEAN_REGIONS: Region[] = [
  {
    type: 'region',
    abbr: 'eu',
    name: 'European Union',
    subs: [
      'at', 'be', 'bg', 'hr', 'cy', 'cz', 'dk', 'fi', 'ee', 'fr', 'de',
      'gr', 'hu', 'ie', 'it', 'lv', 'lt', 'lu', 'mt', 'nl', 'pl', 'pt',
      'ro', 'sk', 'si', 'es', 'se'
    ]
  }, {
    type: 'region',
    abbr: 'not-eu',
    name: 'European Countries not in EU',
    subs: [
      'al', 'ad', 'am', 'az', 'by', 'ba', 'ge', 'is', 'li', 'md', 'mc',
      'me', 'mkd', 'no', 'ru', 'sm', 'rs', 'ch', 'tr', 'ua', 'uk', 'va'
    ]
  }, {
    type: 'region',
    abbr: 'europe',
    name: 'Europe',
    subs: ['eu', 'not-eu']
  }, {
    type: 'region',
    abbr: 'nordics',
    name: 'Nordic countries',
    subs: ['dk', 'fi', 'no', 'se', 'is']
  }, {
    type: 'region',
    abbr: 'baltics',
    name: 'Baltic states',
    subs: ['ee', 'lv', 'lt']
  }, {
    type: 'region',
    abbr: 'v4',
    name: 'Visegrád Group',
    subs: ['cz', 'hu', 'pl', 'sk']
  }, {
    type: 'region',
    abbr: 'benelux',
    name: 'Benelux',
    subs: ['be', 'nl', 'lu']
  }, {
    type: 'region',
    abbr: 'iberia',
    name: 'Iberian Penisula',
    subs: ['es', 'pt']
  }, {
    type: 'region',
    abbr: 'balkans',
    name: 'Balkan Countries',
    subs: ['al', 'ba', 'bg', 'hr', 'me', 'mkd', 'rs']
  }, {
    type: 'region',
    abbr: 'balkans-broad',
    name: 'Broad Balkan Countries',
    subs: ['balkans', 'gr', 'ro', 'si', 'tr']
  }, {
    type: 'region',
    abbr: 'n-europe',
    name: 'Northern Europe',
    subs: ['dk', 'ee', 'fi', 'is', 'ie', 'lv', 'lt', 'no', 'se', 'uk']
  }, {
    type: 'region',
    abbr: 's-europe',
    name: 'Southwest Europe',
    subs: [
      'al', 'ad', 'ba', 'hr', 'gr', 'va', 'it', 'mt', 'me', 'pt', 'sm',
      'rs', 'si', 'es', 'mkd'
    ]
  }, {
    type: 'region',
    abbr: 'w-europe',
    name: 'Western Europe',
    subs: ['au', 'be', 'fr', 'de', 'li', 'lu', 'mc', 'nl', 'ch']
  }, {
    type: 'region',
    abbr: 'e-europe',
    name: 'Eastern Europe',
    subs: ['bg', 'by', 'cz', 'hu', 'md', 'pl', 'ro', 'ru', 'sk', 'ua']
  }, {
    type: 'region',
    abbr: 'c-europe',
    name: 'Central Europe',
    subs: ['at', 'de', 'cz', 'sk', 'pl', 'hu']
  }, {
    type: 'region',
    abbr: 'sw-europe',
    name: 'Southwest Europe',
    subs: ['es', 'pt']
  }, {
    type: 'region',
    abbr: 'se-europe',
    name: 'Southeast Europe',
    subs: ['balkans-broad', 'it']
  }
];