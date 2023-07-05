"use client"

import React from 'react';
import { HeroCaption, HeroCaption2, HeroSection, HeroTitle } from '../style/banner';
import Image from "next/image";
import styled from 'styled-components';

const Comparative = styled(Image)`
  width: auto;
  height: auto;
  max-width: 80%;
  max-height: 80%;
  padding-right: 35%;
  margin-bottom: -35px;
}
`;
export const DownSubtitle = styled.p`
  font-size: 2rem;
  font-family: 'Plus Jakarta Sans', sans-serif;
  position: absolute;
  bottom: 90;
  right: 120;
  margin-left: 35%;

  @media (max-width: 767px) {
    font-size: 1rem;
    margin-top: 6px;
  }
`;



const DownBanner: React.FC = () => {
  return (
    <HeroSection>
      <Comparative src="/media/comparativo_img_CTA.png" alt="Comparativo" width= {380} height={310}>
        
      </Comparative>
      <DownSubtitle>Pronto para triplicar a sua
      <br></br>
      <strong>Geração de Leads?</strong>
      <HeroCaption>
        Criação e ativação em 4 minutos.
      </HeroCaption>
      <hr style={{ width: '100%', borderTop: '1px solid black' }} />
      <button>bla bla bla bla</button>
      </DownSubtitle>
    </HeroSection>
  );
};

export default DownBanner;
