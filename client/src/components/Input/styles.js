import styled from 'styled-components';
import { COLORS, FONTSIZES } from '../../utils/cssVariables.js';

const { input_border, input_outline } = COLORS;
const { input } = FONTSIZES;


export const StyledInput = styled.input.attrs( props => ({
  type: props.type || 'text',
  autoComplete: props.autoComplete || 'off',
}))`
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid ${input_border};
  box-sizing: border-box;
  outline-color: ${input_outline};
  outline: 1px solid unset;
  padding: 0.715em 1.07em;
  width: 75%;
`;

export const Label = styled.label`
  color: #222;
  display: block;
  font-weight: 700;
  margin: 0 0 0.357em 0;
`;

export const Field = styled.div`
  font-size: ${input};
  margin-bottom: 1em;
`;
