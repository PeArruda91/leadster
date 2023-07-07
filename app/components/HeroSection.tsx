"use client"

import React from 'react';
import { HeroCaption, HeroCaption2, HeroSection, HeroSubtitle, HeroTitle } from '../style/banner';
import Image from "next/image";
import styled from 'styled-components';

const Loguinho = styled(Image)`
  width: auto;
  height: auto;
  max-width: 80%;
  max-height: 80%;
  padding-right: 35%;
  margin-left: 0px;
  margin-bottom: -12px;

  @media (max-width: 767px) {
    
    display: none;
  }
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
