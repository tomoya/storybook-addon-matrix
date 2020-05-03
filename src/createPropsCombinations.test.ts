import { createPropsCombinations } from './createPropsCombinations';

describe('createPropsCombinations', () => {
  test('return propsCombinations', () => {
    const propsPattern = {
      color: ['black', 'blue'],
      p: [1, 2],
      fontSize: [1, 2],
    };
    const propsCombinations = createPropsCombinations(propsPattern);
    const expected = [
      { color: 'black', p: 1, fontSize: 1 },
      { color: 'blue', p: 1, fontSize: 1 },
      { color: 'black', p: 2, fontSize: 1 },
      { color: 'blue', p: 2, fontSize: 1 },
      { color: 'black', p: 1, fontSize: 2 },
      { color: 'blue', p: 1, fontSize: 2 },
      { color: 'black', p: 2, fontSize: 2 },
      { color: 'blue', p: 2, fontSize: 2 },
    ];
    expect(propsCombinations).toEqual(expected);
  });
});
