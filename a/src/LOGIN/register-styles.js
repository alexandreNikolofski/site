import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Certifique-se de importar Link aqui

export const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #121212; /* Cor de fundo dark */
`;

export const RegisterForm = styled.div`
  background: #1e1e1e; /* Cor de fundo do formulário dark */
  padding: 3rem; /* Espaço interno aumentado */
  border-radius: 12px; /* Bordas arredondadas */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Sombra mais pronunciada */
  width: 400px; /* Largura aumentada */
  max-width: 100%; /* Largura responsiva */
  box-sizing: border-box; /* Inclui padding e borda no tamanho total */
`;

export const FormTitle = styled.h2`
  margin-bottom: 1.5rem; /* Espaçamento inferior aumentado */
  font-size: 2rem; /* Tamanho da fonte aumentado */
  color: #ffffff; /* Cor do texto do título */
  text-align: center; /* Centraliza o título */
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem; /* Espaçamento inferior aumentado */
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.75rem; /* Espaçamento inferior do rótulo */
  font-size: 1.125rem; /* Tamanho da fonte aumentado */
  color: #b0bec5; /* Cor clara para o texto do rótulo */
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 1rem; /* Padding aumentado para mais conforto */
  border: 1px solid #333; /* Borda escura para se destacar no tema dark */
  border-radius: 8px; /* Bordas arredondadas */
  box-sizing: border-box; /* Inclui padding e borda no tamanho total */
  font-size: 1.125rem; /* Tamanho da fonte aumentado */
  color: #e0e0e0; /* Cor do texto do campo de entrada */
  background-color: #333; /* Cor de fundo do campo de entrada */
  
  &::placeholder {
    color: #888; /* Cor dos placeholders */
  }
`;

export const SubmitButton = styled.button`
  background-color: #4caf50; /* Cor verde escura mais suave */
  color: #ffffff; /* Cor do texto do botão */
  padding: 1rem; /* Padding aumentado */
  border: none;
  border-radius: 8px; /* Bordas arredondadas */
  cursor: pointer;
  width: 100%;
  font-size: 1.125rem; /* Tamanho da fonte aumentado */
  transition: background-color 0.3s; /* Transição suave para mudança de cor */
  
  &:hover {
    background-color: #45a049; /* Cor verde mais escura ao passar o mouse */
  }
`;

export const MessageText = styled.p`
  color: #cf6679; /* Cor de erro clara e visível no tema dark */
  font-size: 1rem; /* Tamanho da fonte aumentado */
  margin-top: 1rem; /* Espaçamento superior aumentado */
  text-align: center; /* Centraliza o texto de mensagem */
`;

export const LoginLink = styled(Link)`
  display: block;
  margin-top: 1.5rem; /* Espaçamento superior aumentado */
  color: #90caf9; /* Cor azul clara para o link */
  text-align: center; /* Centraliza o link */
  font-size: 1.125rem; /* Tamanho da fonte aumentado */
  
  &:hover {
    color: #64b5f6; /* Cor azul mais escura ao passar o mouse */
    text-decoration: underline; /* Sublinhado ao passar o mouse */
  }
`;