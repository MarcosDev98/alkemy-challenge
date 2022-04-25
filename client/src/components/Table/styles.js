import styled from 'styled-components';
import { COLORS } from '../../utils/cssVariables';

const { table_incomes, table_expenses } = COLORS;

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



export const TableHead = styled.thead`

@media only screen and ${device.lg} {

display: none;


}
`;

export const TableBody = styled.tbody`

@media only screen and ${device.lg} {

  display: block;
  width: 100%;

}

`;

export const TableContainer = styled.div`
  color: #0B1827;
  margin: 15px auto;
  // eslint-disable-next-line
  

`;



export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;

  @media only screen and ${device.lg} {

    display: block;
    width: 100%;

}

`;

export const TR = styled.tr`

  background-color: ${props => props.bg === 'green' ? table_incomes : table_expenses };
  width: 100%;

  @media only screen and ${device.lg} {

    display: block;
    width: 100%;

    margin-bottom: .5em;

}
`;

export const TH = styled.th`
  text-align: center;
  font-weight: 600;
  padding: 6px 12px;
  background-color: #494949;
  /* color: #00CFFD; */
  color: #fff;
`;



export const ConceptTH = styled(TH)`
  text-align: left;
`;

