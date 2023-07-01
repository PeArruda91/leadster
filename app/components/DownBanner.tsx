"use client"

import React from 'react';
import { HeroCaption, HeroCaption2, HeroSection, HeroSubtitle, HeroTitle } from '../style/banner';



const DownBanner: React.FC = () => {
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

export default DownBanner;
