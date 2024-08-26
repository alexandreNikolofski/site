import React, { useState } from 'react';
import axios from 'axios';
import {
  RegisterContainer,
  RegisterForm,
  FormTitle,
  FormGroup,
  FormLabel,
  FormInput,
  SubmitButton,
  MessageText,
  LoginLink
} from './register-styles'; // Atualizado para register-styles

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/register', { username, password });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error registering user');
    }
  };

  return (
    <RegisterContainer>
      <RegisterForm>
        <FormTitle>Register</FormTitle>
        <form onSubmit={handleRegister}>
          <FormGroup>
            <FormLabel htmlFor="username">Register:</FormLabel>
            <FormInput
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="password">Password:</FormLabel>
            <FormInput
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormGroup>
          <SubmitButton type="submit">Cadastre-se</SubmitButton>
        </form>
        <MessageText>{message}</MessageText>
        <LoginLink to="/">Já tem conta? Clique aqui</LoginLink>
      </RegisterForm>
    </RegisterContainer>
  );
}

export default Register;