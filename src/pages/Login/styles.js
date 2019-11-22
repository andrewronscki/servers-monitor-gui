import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${props => (props.primary ? 'center' : 'space-between')};
  margin: ${props => (props.primary ? '20px' : '0px')};
  padding: ${props => (props.primary ? '20px' : '0px')};
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  color: #0a6ecf;
  margin-bottom: 20px;
`;

export const LogoImg = styled.img`
  height: 100px;
`;

export const UsrImg = styled.img`
  height: 120px;
`;

export const LoginForm = styled.form`
  padding: 20px;
  display: flex;
  height: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #053e75;
  box-shadow: 10px 10px 50px #000000;
`;

export const Input = styled.input`
  border: 1px solid #000307;
  background-color: #c1c1c1;
  border-radius: 4px;
  color: #666;
  width: 100%;
  margin: 8px 0px 0px 0px;
  padding: 5px;
`;

export const Btn = styled.button`
  background: #0a6ecf;
  border: 1px solid #000307;
  margin: 8px 0px 0px 0px;
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  border-radius: 5px;
  color: #ffffff;
`;

export const Link = styled.a`
  margin-top: 3px;
  font-size: 10px;
  font-weight: normal;
  padding: 3px;
  text-decoration: none;
  color: #fff;
`;
