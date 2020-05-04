/* eslint-disable @typescript-eslint/no-magic-numbers */
import { StoryContext } from '@storybook/addons';
import { ErrorProps } from './components/Error';
import { MatrixProps } from './components/Matrix';

type CoponentAndPattern = {
  errors: ErrorProps['messages'];
  component?: MatrixProps['component'];
  pattern?: MatrixProps['propsPattern'];
};

const isObject = (arg: any): boolean => arg && typeof arg === 'object';

export function getComponentAndPattern({ parameters }: StoryContext): CoponentAndPattern {
  const {
    component,
    matrix: { pattern },
  } = parameters;
  const errors: ErrorProps['messages'] = [];
  if (!component) {
    errors.push('Default export component must be present');
  }
  if (!pattern) {
    errors.push('Parameter pattern must be present');
  }
  if (pattern && typeof pattern !== 'object') {
    errors.push('Parameter pattern must be Object');
  }
  if (isObject(pattern) && Object.keys(pattern).length === 0) {
    errors.push('Parameter pattern must not be empty');
  }
  if (
    isObject(pattern) &&
    Object.keys(pattern).length !== 0 &&
    Object.entries(pattern).some(([_, v]) => !Array.isArray(v))
  ) {
    errors.push('Parameter pattern value must be Array');
  }
  if (errors.length !== 0) {
    return { errors };
  }
  return {
    errors,
    component,
    pattern,
  };
}
