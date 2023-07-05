"use client"

import React from 'react';
import { HeroCaption, HeroCaption2, HeroSection, HeroSubtitle, HeroTitle } from '../style/banner';
import Image from "next/image";
import styled from 'styled-components';

export const Comparative = styled(Image)`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  padding-right: 45%;
  margin-bottom: -55px;
}
`;


const DownBanner: React.FC = () => {
  return (
    <HeroSection>
      <Comparative src="/media/comparativo_img_CTA.png" alt="Comparativo" width= {330} height={250}></Comparative>
    </HeroSection>
  );
};

export default DownBanner;
