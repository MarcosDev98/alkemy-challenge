import styled from 'styled-components';
import { COLORS } from '../../utils/cssVariables';

const { table_incomes, table_expenses } = COLORS;


export const TableContainer = styled.div`
  color: #0B1827;
  margin: 15px auto;
`;



export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const TableHead = styled.thead``;

export const TableBody = styled.tbody``;

export const TR = styled.tr`

  background-color: ${props => props.bg === 'green' ? table_incomes : table_expenses };
  width: 100%;

`;

export const TH = styled.th`
  text-align: center;
  font-weight: 600;
  padding: 6px 12px;
  background-color: #494949;
  /* color: #00CFFD; */
  color: #fff;
`;

export const TD = styled.td`
  width: 25%;
  padding: 6px 12px;
`;

export const ConceptTH = styled(TH)`
  text-align: left;
`;