import styled from 'styled-components';
import { COLORS, FONTSIZES } from '../../utils/cssVariables';
import Input from '../Input/';
import { MyButton } from '../Button/styles';

const { login_bg } = COLORS;
const { login_title } = FONTSIZES;

export const Body = styled.div`
  align-items: center;
  background-color: ${login_bg};
  display: flex;
  height: 100vh;
  justify-content: center;
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  max-width: 430px;
  position: relative;
  width: 100%;
`;

export const Forms = styled.div`
`;

export const Form = styled.form`
  padding: 30px;
`;

export const Title = styled.span`
  font-size: ${login_title};
  font-weight: 600;
  position: relative;

  ::before{
    background-color: ${login_bg};
    border-radius: 25px;
    bottom: 0;
    content: '';
    height: 3px;
    left: 0;
    position: absolute;
    width: 30px;
  }

`;

export const FormContainer = styled.div`
  padding: 30px;
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


export const A = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #09f;
  margin-left: 5px;

  :hover {
    text-decoration: underline;
  }
`;

export const BlockButton = styled(MyButton)`
  margin: 30px 0 30px 0;
  border-radius: 6px;
  font-size: 17px; 
  letter-spacing: 1px;
  width: 100%;
  transition: all 0.3s ease;
`;

export const LoginSignup = styled.div`
  text-align: center;
`;


export const Span = styled.span``;
