import styled from 'styled-components';

import { TD } from '../Table/styles';

export const MyTD = styled(TD)`
  text-align: left;
  width: 30%;
`;


export const EditIcon = styled.i`
  font-size: 20px;
  cursor: pointer;
  transition: all 0.2s ease;

  :hover{
    color: #09f;
  }

`;


export const DeleteIcon = styled.i`
  font-size: 20px;
  position: absolute;
  right: 11%;
  cursor: pointer;
  transition: all 0.2s ease;


  :hover{
    color: #09f;
  }

`;

export const IconsTD = styled(TD)`
  width: 1%;
`;

export const CategoryTD = styled(TD)`
  width: 10%;
  text-align: center;
`;

export const DateTD = styled(TD)`
  width: 10%;
  text-align: center;
`;

export const ConceptTD = styled(TD)`
  width: 30%;
`;

export const AmountTD = styled(TD)`
  width: 15%;
  text-align: center;
`;