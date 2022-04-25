import styled from 'styled-components';
import { COLORS, FONTSIZES } from '../../utils/cssVariables.js';


const { input_border, input_outline } = COLORS;
// eslint-disable-next-line no-unused-vars
const { input } = FONTSIZES;

const size = {
  // eslint-disable-next-line quotes
  xs: `320px`,
  // eslint-disable-next-line
  sm: `768px`,
  // eslint-disable-next-line
  lg: `900px`,
};

const device = {
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  lg: `(max-width: ${size.lg})`,
};

export const ButtonsContainer = styled.div`

  display: flex;
  justify-content: space-around;
  align-items: center;

`;

export const Button = styled.button`

`;

export const Input = styled.input`

  background-color: #fff;
  border-radius: 4px;
  border: 1px solid ${input_border};
  box-sizing: border-box;
  outline-color: ${input_outline};
  outline: 1px solid unset;
  padding: 0.715em 1.07em;
  width: 75%;

@media only screen and ${device.lg} {

  background-color: #fff;
  border-radius: 4px;
  border: 1px solid ${input_border};
  box-sizing: border-box;
  outline-color: ${input_outline};
  outline: 1px solid unset;
  padding: 0.715em 1.07em;
  width: 75%;
}

`;

export const TD = styled.td`

  width: 30%;
  padding: 6px 12px;

  @media only screen and ${device.lg} {

    display: block;
    width: 50%;
    text-align: center;
    padding-left: 50%;
    position: relative;

    :before {
      content: ${props => props.name};
      position: absolute;
      left: 0;


      padding-left: 1em;
      width: 45%;
      font-weight: 600;
      font-size: 1.1em;

    }
}

`;
