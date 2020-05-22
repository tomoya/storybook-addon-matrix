import { cartesianProduct } from 'js-combinatorics';

export const createPropsCombinations = (matrixPattern: object) => {
  const propsKeys = Object.keys(matrixPattern);
  const propsValues = Object.values(matrixPattern);
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
