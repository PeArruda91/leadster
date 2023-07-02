"use client"

import React, { useState } from 'react';
import styled from 'styled-components';
import ModalVideo from "./ModalVideo";
import MktVideo from "./mktdigVIdeos"; 

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 400px; /* Defina a largura máxima do container */
`;

const Button = styled.button`
  padding: 8px 16px; /* Reduzir o tamanho do padding para diminuir o botão */
  background-color: transparent;
  border: 2px solid black;
  border-radius: 20px; /* Aumentar o valor do border-radius para arredondar mais */
  color: black;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s;
  flex: 1; /* Ocupa a largura disponível no container */
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
const ButtonGroup = styled.div`
  width: 100%;
  margin-top: 10px; /* Igual ao margin do VideoCard */;
  margin-left: -70px
`

const FourButtonComponent: React.FC = () => {
  const [selectedComponent, setSelectedComponent] = useState<React.ReactNode>(null);

  const handleButtonClick = (component: React.ReactNode) => {
    setSelectedComponent(component);
  };

  return (
    <>
      <ButtonGroup>
        <ButtonContainer>
          <Button onClick={() => handleButtonClick(<MktVideo />)}>Marketing Digital</Button>
          <Button onClick={() => handleButtonClick(<ModalVideo />)}>Mídia Paga</Button>
          <Button>lorem ipsum</Button>
          <Button>lorem ipsum</Button>
        </ButtonContainer>
      </ButtonGroup>
      {selectedComponent}
    </>
  );
};

export default FourButtonComponent;
