"use client"

import React from 'react';
import styled from 'styled-components';

// Estilos do componente
const HeroSection = styled.section`
  background-color: #EAF6FF;
  color: #FFFFFF;
  padding: 2rem;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
`;

const HeroSectionComponent: React.FC = () => {
  return (
    <HeroSection>
      <HeroTitle>Bem-vindo à Hero Section</HeroTitle>
      <HeroSubtitle>Esta é uma seção de destaque para o seu site</HeroSubtitle>
    </HeroSection>
  );
};

export default HeroSectionComponent;
