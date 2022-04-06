import styled from 'styled-components';
import { COLORS, FONTSIZES } from '../../utils/cssVariables';

const { button_bg, button_hover } = COLORS;
const { button } = FONTSIZES;

export const MyButton = styled.button`
  background-color: ${button_bg};
  border-radius: 4px;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: ${button};
  font-weight: 700;
  padding: 1em 2em;
  transition: all 0.5s ease;

  :hover {
    background-color: ${button_hover};
  }
`;