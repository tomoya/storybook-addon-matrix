/* eslint-disable @typescript-eslint/no-magic-numbers */
import { MatrixProps } from '../components/Matrix';
import { ErrorProps } from '../components/Error';

type ValidateParameters = {
  errors: ErrorProps['messages'];
};

type Parameters = {
  component?: MatrixProps['component'];
  matrix: {
    pattern?: MatrixProps['matrixPattern'];
    backgroundColor?: MatrixProps['backgroundColor'];
  };
};

const isObject = (arg: any): boolean => typeof arg === 'object';

export function validateParameters({ component, matrix }: Parameters): ValidateParameters {
  const { pattern } = matrix;
  const errors: ErrorProps['messages'] = [];
  if (!component) {
    errors.push('Default export component must be present');
  }
  if (!pattern) {
    errors.push('Parameter pattern must be present');
  }
  if (pattern && !isObject(pattern)) {
    errors.push('Parameter pattern must be Object');
  }
  if (pattern && isObject(pattern) && Object.keys(pattern).length === 0) {
    errors.push('Parameter pattern must not be empty');
  }
  if (
    pattern &&
    isObject(pattern) &&
    Object.keys(pattern).length !== 0 &&
    Object.entries(pattern).some(([_, v]) => !Array.isArray(v))
  ) {
    errors.push('Parameter pattern value must be Array');
  }
  return {
    errors,
  };
}
