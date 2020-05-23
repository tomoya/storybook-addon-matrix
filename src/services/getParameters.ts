import { StoryContext } from '@storybook/addons';
import { MatrixProps } from '../components/Matrix';
import { ErrorProps } from '../components/Error';
import { validateParameters } from './validateParameters';

export type Parameters = {
  errors: ErrorProps['messages'];
  component?: MatrixProps['component'];
  pattern?: MatrixProps['matrixPattern'];
  backgroundColor: MatrixProps['backgroundColor'];
  showOriginal: Boolean;
};

export function getParameters({ parameters }: StoryContext): Parameters {
  const { component, matrix } = parameters;
  const { errors } = validateParameters({ component, matrix });
  if (!matrix) {
    return {
      errors,
      component,
      pattern: undefined,
      backgroundColor: undefined,
      showOriginal: false,
    };
  }
  const { pattern, backgroundColor, showOriginal } = matrix;
  return {
    errors,
    component,
    pattern,
    backgroundColor,
    showOriginal: showOriginal ?? false,
  };
}
