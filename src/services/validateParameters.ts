/* eslint-disable @typescript-eslint/no-magic-numbers */
import { Parameters } from './getParameters';
import { ErrorProps } from '../components/Error';

type ValidateParameters = {
  errors: ErrorProps['messages'];
  validity: Boolean;
};

const isObject = (arg: any): boolean => typeof arg === 'object';

export function validateParameters({ component, pattern }: Parameters): ValidateParameters {
  const errors: ErrorProps['messages'] = [];
  let validity = false;
  if (!component) {
    errors.push('Default export component must be present');
  }
  if (!pattern) {
    errors.push('Parameter pattern must be present');
  }
  if (pattern && typeof pattern !== 'object') {
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
  if (errors.length === 0) {
    validity = true;
  }
  return {
    errors,
    validity,
  };
}
