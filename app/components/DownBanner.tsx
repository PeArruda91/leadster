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

  @media (max-width: 767px) {
    padding-right: 0;
    margin: 0 auto;
    display: block;
  }
}
`;

const DownSubtitle = styled.p`
  font-size: 2rem;
  font-family: 'Plus Jakarta Sans', sans-serif;
  position: absolute;
  bottom: 90;
  right: 120;
  margin-left: 35%;

  @media (max-width: 767px) {
    font-size: 1rem;
    margin-top: 6px;
    position: static;
    text-align: center;
    margin-left: 0;
    padding: 20px;
  }
`;

const BlueButton = styled.button`
  background-color: #0084FF;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  margin-left: 0px;
  margin-top: -10px;
  cursor: pointer;
`;


const DownBanner: React.FC = () => {
  return (
    <HeroSection>
      <Comparative src="/media/comparativo_img_CTA.png" alt="Comparativo" width={380} height={310} />

      <DownSubtitle>
        Pronto para triplicar a sua
        <br />
        <strong>Geração de Leads?</strong>
        <HeroCaption>Criação e ativação em 4 minutos.</HeroCaption>
        <hr style={{ width: '100%', borderTop: '1px solid black' }} />
        <BlueButton>bla bla bla bla</BlueButton>
      </DownSubtitle>
    </HeroSection>
  );
};

export default DownBanner;
