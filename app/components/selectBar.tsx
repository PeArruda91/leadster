"use client"

import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px; /* Aumentei a largura do container */
  margin: 0 auto;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 10px;
  color: black;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s;
  width: 100%; /* Ocupa 100% da largura disponível */
  margin-right: 10px; /* Adiciona um espaçamento lateral entre os botões */
  white-space: nowrap; /* Evita que as palavras sejam quebradas */

  &:last-child {
    margin-right: 0; /* Remove o espaçamento do último botão */
  }

  &:hover {
    border: 2px solid #0084FF;
    color: #0084FF;
  }
`;

const FourButtonComponent: React.FC = () => {
  return (
    <ButtonContainer>
      <Button>SEO</Button>
      <Button>Mídia Paga</Button>
      <Button>lorem ipsum</Button>
      <Button>lorem ipsum</Button>
    </ButtonContainer>
  );
};

export default FourButtonComponent;
