import { validateParameters } from './validateParameters';
import { ComponentMock } from '../__mocks__/ComponentMock';

describe('validateParameters', () => {
  const testPattern = {
    color: ['black', 'blue'],
    p: [1, 2],
    fontSize: [1, 2],
  };

  test('returns true when valid component and pattern parameters', () => {
    const parameters = {
      component: ComponentMock,
      matrix: {
        pattern: testPattern,
        backgroundColor: undefined,
      },
    };
    const { validity, errors } = validateParameters(parameters);
    expect(validity).toEqual(true);
    expect(errors).toEqual([]);
  });

  test('returns true when valid component, pattern, and backgroundColor parameters', () => {
    const parameters = {
      component: ComponentMock,
      matrix: {
        pattern: testPattern,
        backgroundColor: '#fff',
      },
    };
    const { validity, errors } = validateParameters(parameters);
    expect(validity).toEqual(true);
    expect(errors).toEqual([]);
  });

  test('returns errors when comonent is not provided', () => {
    const parameters = {
      component: undefined,
      matrix: {
        pattern: testPattern,
        backgroundColor: '#fff',
      },
    };
    const { validity, errors } = validateParameters(parameters);
    expect(validity).toEqual(false);
    expect(errors).toEqual(['Default export component must be present']);
  });

  test('returns errors when pattern is not provided', () => {
    const parameters = {
      component: ComponentMock,
      matrix: {
        pattern: undefined,
        backgroundColor: undefined,
      },
    };
    const { validity, errors } = validateParameters(parameters);
    expect(validity).toEqual(false);
    expect(errors).toEqual(['Parameter pattern must be present']);
  });

  test('returns errors when pattern is not object', () => {
    const parameters = {
      component: ComponentMock,
      matrix: {
        pattern: 'string' as Object,
        backgroundColor: undefined,
      },
    };
    const { validity, errors } = validateParameters(parameters);
    expect(validity).toEqual(false);
    expect(errors).toEqual(['Parameter pattern must be Object']);
  });

  test('returns errors when pattern is empty', () => {
    const parameters = {
      component: ComponentMock,
      matrix: {
        pattern: {},
        backgroundColor: undefined,
      },
    };
    const { validity, errors } = validateParameters(parameters);
    expect(validity).toEqual(false);
    expect(errors).toEqual(['Parameter pattern must not be empty']);
  });

  test('returns errors when pattern value is not array', () => {
    const parameters = {
      component: ComponentMock,
      matrix: {
        pattern: {
          color: ['string'],
          fontSize: 'string',
        },
        backgroundColor: undefined,
      },
    };
    const { validity, errors } = validateParameters(parameters);
    expect(validity).toEqual(false);
    expect(errors).toEqual(['Parameter pattern value must be Array']);
  });

  test('returns errors when component and pattern are not provided', () => {
    const parameters = {
      component: undefined,
      matrix: {
        pattern: undefined,
        backgroundColor: undefined,
      },
    };
    const { validity, errors } = validateParameters(parameters);
    expect(validity).toEqual(false);
    expect(errors).toEqual([
      'Default export component must be present',
      'Parameter pattern must be present',
    ]);
  });
});
