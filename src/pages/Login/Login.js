import React from 'react';
import {
  Container,
  Box,
  Title,
  LogoImg,
  UsrImg,
  Btn,
  LoginForm,
  Input,
  Link,
} from './styles';

import logo from '../../assets/images/Logo.svg';
import userImg from '../../assets/images/UserImg.svg';

export default function Login() {
  return (
    <Container>
      <Box>
        <Title>W Servers Monitor</Title>
        <LogoImg src={logo} alt="logo" />
      </Box>
      <LoginForm>
        <UsrImg src={userImg} />
        <Input placeholder="Nome" />
        <Input type="password" placeholder="Senha" />
        <Btn>Entrar</Btn>
        <Link href="/">Esqueceu a sua senha?</Link>
        <Link href="/">Criar uma nova conta</Link>
      </LoginForm>
    </Container>
  );
}
