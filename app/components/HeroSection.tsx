"use client"

import React from 'react';
import styled from 'styled-components';

// Estilos do componente
const HeroSection = styled.section`
  min-height: 20rem;
  background-color: #EAF6FF;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;

  @media (min-height: 1600px) {
    min-height: 610px;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  color: #0084FF;
  margin-bottom: 0.5rem;
  font-family: 'Plus Jakarta Sans', sans-serif;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  font-family: 'Plus Jakarta Sans', sans-serif;
`;

const HeroCaption = styled.p`
  font-size: 1rem;
  margin-top: 1rem;
  font-family: 'Plus Jakarta Sans', sans-serif;
`;

const HeroCaption2 = styled.p`
  font-size: 1rem;
  margin-top: 1rem;
  color: #0084FF;
  font-weight: bold;
  border: 2px solid #0084FF;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 0;
  padding: 0.5rem;
  font-family: 'Plus Jakarta Sans', sans-serif;
`;

const HeroSectionComponent: React.FC = () => {
  return (
    <HeroSection>
      <HeroCaption2>Webnars exclusivos</HeroCaption2>
      <HeroSubtitle>Menos conversinha</HeroSubtitle>
      <HeroTitle>Mais Conversão</HeroTitle>
      <hr style={{ width: '50%', borderTop: '1px solid black' }} />
      <HeroCaption>Conheça as estratégias que <strong>mudaram o jogo</strong> e como aplicá-las no seu negócio!</HeroCaption>
    </HeroSection>
  );
};

export default HeroSectionComponent;
