import { StoryContext } from '@storybook/addons';
import { getParameters } from './getParameters';
import { ComponentMock } from '../__mocks__/ComponentMock';

describe('getParameters', () => {
  const testPattern = {
    color: ['black', 'blue'],
    p: [1, 2],
    fontSize: [1, 2],
  };

  test('returns component, pattern, and backgroundColor', () => {
    const context: StoryContext = {
      id: 'id',
      name: 'name',
      kind: 'kind',
      parameters: {
        component: ComponentMock,
        matrix: {
          pattern: testPattern,
          backgroundColor: '#eee',
          showOriginal: true,
        },
      },
    };
    const { component, pattern, backgroundColor, showOriginal } = getParameters(context);
    expect(component).toEqual(ComponentMock);
    expect(pattern).toEqual(testPattern);
    expect(backgroundColor).toEqual('#eee');
    expect(showOriginal).toEqual(true);
  });

  test('returns pattern', () => {
    const context: StoryContext = {
      id: 'id',
      name: 'name',
      kind: 'kind',
      parameters: {
        matrix: {
          pattern: testPattern,
        },
      },
    };
    const { component, pattern, backgroundColor, showOriginal } = getParameters(context);
    expect(component).toEqual(undefined);
    expect(pattern).toEqual(testPattern);
    expect(backgroundColor).toEqual(undefined);
    expect(showOriginal).toEqual(false);
  });

  test('returns backgroundColor', () => {
    const context: StoryContext = {
      id: 'id',
      name: 'name',
      kind: 'kind',
      parameters: {
        matrix: {
          backgroundColor: '#eee',
        },
      },
    };
    const { component, pattern, backgroundColor, showOriginal } = getParameters(context);
    expect(component).toEqual(undefined);
    expect(pattern).toEqual(undefined);
    expect(backgroundColor).toEqual('#eee');
    expect(showOriginal).toEqual(false);
  });
});
