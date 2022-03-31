import styled from 'styled-components';
import { Input } from '../';

export const Forms = styled.div`

`;

export const Form = styled.div`
  padding: 30px;
`;

export const Title = styled.span`
  font-size: 27px;
  font-weight: 600;
  position: relative;

  ::before{
    background-color: #09f;
    border-radius: 25px;
    bottom: 0;
    content: '';
    height: 3px;
    left: 0;
    position: absolute;
    width: 30px;
  }
`;


export const InputField = styled.div`
  height: 50px;
  margin-bottom: 30px;
  margin-top: 30px;
  position: relative;
  width: 100%;

`;

export const StyledInput = styled(Input)`
  border: none;
  border-bottom: 3px solid #ccc;
  border-top: 3px solid transparent;
  height: 100%;
  outline: none;
  padding: 0 35px;
  position: absolute;
  width: 100%;
  transition: all 0.2s ease;

  :focus {
    border-bottom: 3px solid #09f;
  }

`;

export const RightIcon = styled.i`
  color: #999;
  font-size: 23px;
  right: 0;
  position: absolute;
  top: 100%;
  transform: translateY(-50%);
  transition: all 0.2s ease;
  cursor: pointer;
  padding: 10px;
`;