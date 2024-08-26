import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  LoginContainer,
  LoginForm,
  FormTitle,
  FormGroup,
  FormLabel,
  FormInput,
  SubmitButton,
  ErrorText
} from './login-syles'; // Atualizado para login-styles

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful', data);
        setIsLoggedIn(true);
        setError('');
      } else {
        setError('Login failed. Please check your username and password.');
      }
    } catch (error) {
      setError('An error occurred while trying to log in.');
      console.error('Error:', error);
    }
  };

  return (
    <LoginContainer>
      {!isLoggedIn ? (
        <LoginForm>
          <FormTitle>Login</FormTitle>
          <form onSubmit={handleLogin}>
            <FormGroup>
              <FormLabel htmlFor="username">Username:</FormLabel>
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
            {error && <ErrorText>{error}</ErrorText>}
            <SubmitButton type="submit">Login</SubmitButton>
            <Link to="/Register">Não tem uma conta? Registre-se aqui</Link>
          </form>
        </LoginForm>
      ) : (
        <div>
          <h1>Welcome, {username}!</h1>
        </div>
      )}
    </LoginContainer>
  );
}

export default Login;