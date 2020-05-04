/* eslint-disable @typescript-eslint/no-magic-numbers */
import { StoryContext } from '@storybook/addons';
import { ErrorProps } from './components/Error';
import { MatrixProps } from './components/Matrix';

type CoponentAndPattern = {
  errors: ErrorProps['messages'];
  component?: MatrixProps['component'];
  pattern?: MatrixProps['propsPattern'];
};

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
  if (pattern && typeof pattern === 'object' && Object.keys(pattern).length === 0) {
    errors.push('Parameter pattern must not be empty');
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
