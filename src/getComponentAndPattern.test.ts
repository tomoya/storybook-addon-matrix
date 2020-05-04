import { StoryContext } from '@storybook/addons';
import { getComponentAndPattern } from './getComponentAndPattern';
import { ComponentMock } from '../__mocks__/ComponentMock';

describe('getComponentAndPattern', () => {
  const testPattern = {
    color: ['black', 'blue'],
    p: [1, 2],
    fontSize: [1, 2],
  };

  test('return component and pattern when no error', () => {
    const context: StoryContext = {
      id: 'id',
      name: 'name',
      kind: 'kind',
      parameters: {
        component: ComponentMock,
        matrix: {
          pattern: testPattern,
        },
      },
    };
    const { errors, component, pattern } = getComponentAndPattern(context);
    expect(errors).toEqual([]);
    expect(component).toEqual(ComponentMock);
    expect(pattern).toEqual(testPattern);
  });

  test('return errors when comonent is not provided', () => {
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
    const { errors, component, pattern } = getComponentAndPattern(context);
    expect(errors).toEqual(['Default export component must be present']);
    expect(component).toEqual(undefined);
    expect(pattern).toEqual(undefined);
  });

  test('return errors when pattern is not provided', () => {
    const context: StoryContext = {
      id: 'id',
      name: 'name',
      kind: 'kind',
      parameters: {
        component: ComponentMock,
        matrix: {},
      },
    };
    const { errors, component, pattern } = getComponentAndPattern(context);
    expect(errors).toEqual(['Parameter pattern must be present']);
    expect(component).toEqual(undefined);
    expect(pattern).toEqual(undefined);
  });

  test('return errors when component and pattern are not provided', () => {
    const context: StoryContext = {
      id: 'id',
      name: 'name',
      kind: 'kind',
      parameters: {
        matrix: {},
      },
    };
    const { errors, component, pattern } = getComponentAndPattern(context);
    expect(errors).toEqual([
      'Default export component must be present',
      'Parameter pattern must be present',
    ]);
    expect(component).toEqual(undefined);
    expect(pattern).toEqual(undefined);
  });
});
