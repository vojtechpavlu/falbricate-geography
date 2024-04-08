import { getStandard, getValueGenerator, registerPlugin } from '@falbricate/base';
import { GeographyPlugin } from '../../src';

describe('Not failing Plugin registration', () => {
  it('should load the plugin', () => {
    expect(() => registerPlugin(GeographyPlugin())).not.toThrow();
  });
});

describe('Registering contents', () => {
  it('should register Random Country Generator', () => {
    const config = {
      countries: ['no', 'it']
    };

    expect(() => getValueGenerator('random-country', config)).not.toThrow();
  });

  it('should register Random European Country standard', () => {
    expect(() => getStandard('country-abbr-eu')).not.toThrow();
  });
});

