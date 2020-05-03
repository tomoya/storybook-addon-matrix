import { cartesianProduct } from 'js-combinatorics';

export const createPropsCombinations = (propsPattern: object) => {
  const propsKeys = Object.keys(propsPattern);
  const propsValues = Object.values(propsPattern);
  const cp = cartesianProduct(...propsValues);
  // TODO: Property 'reduce' does not exist on type 'ICartesianProductGenerator<any[]>'.
  // @ts-ignore
  return cp.reduce((acc: any[], cur: any[], i: number) => {
    acc[i] = {};
    propsKeys.forEach((key, idx) => {
      acc[i][key] = cur[idx];
    });
    return acc;
  }, []);
};
