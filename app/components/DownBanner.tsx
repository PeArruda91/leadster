"use client"


import React from 'react';
import { HeroCaption, HeroCaption2, HeroSection, HeroTitle } from '../style/banner';
import Image from "next/image";
import styled from 'styled-components';
import Link from 'next/link';

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
`;

const CreditCard = styled(Image)`
width: auto;
height: auto;
max-width: 80%;
max-height: 80%;
padding-top: -65px;
margin-right: 5px;

@media (max-width: 767px) {
  padding-right: 0;
  margin: 0 auto;
  display: block;
}
`;

const Rate = styled(Image)`
  width: auto;
  height: auto;
  max-width: 80%;
  max-height: 80%;
  margin-right: 5px;
  margin-left: -5px;
  padding-top: -65px;

  @media (max-width: 767px) {
    padding-right: 0;
    margin: 0 auto;
    display: block;
  }
`;

const Toptenapp = styled(Image)`
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

const DownSubtitle = styled.div`
  font-size: 2rem;
  font-family: 'Plus Jakarta Sans', sans-serif;
  position: absolute;
  bottom: 90;
  right: 120;
  margin-left: 35%;
  z-index: 0;

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
  padding: 22px 34px; 
  font-size: 0.875rem; 
  border: none;
  border-radius: 35px;
  margin-right: 5px;
  margin-top: 5px;
  cursor: pointer;
  white-space: nowrap; 

  @media (max-width: 767px){
    display: none;
  }
`;


const TopTenAppContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: -10px;
`;

const TopTenAppCaption = styled.div`
  margin-left: 10px;
`;

const TopTenAppTitle = styled.p`
  font-size: 0.875rem;
  font-weight: bold;
  margin-bottom: 4px;
`;
const CreditCardRateContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

const CreditCardCaption = styled.p`
  font-size: 0.75rem;
  margin-right: 10px;
`;

const RateCaption = styled.p`
  font-size: 0.75rem;
`;

const DownBanner: React.FC = () => {
  return (
    <HeroSection>
      <Comparative src="/media/comparativo_img_CTA.png" alt="Comparativo" width={380} height={310} />

      <DownSubtitle>
        Pronto para triplicar a sua
        <br />
        <strong>Geração de Leads?</strong>
        <HeroCaption>Criação e ativação em <strong>4 minutos.</strong></HeroCaption>
        <hr style={{ width: '100%', borderTop: '1px solid black' }} />
        <TopTenAppContainer>
          <Link href="https://leadster.com.br/" target="_blank" rel="noopener noreferrer">
          <BlueButton>VER DEMONSTRAÇÃO</BlueButton>
          </Link>
          <Toptenapp src="/media/selo_RD.png" alt="seloRD" width={353} height={73} />
        </TopTenAppContainer>
        
        <CreditCardRateContainer>
          <CreditCard src="/media/no-card-dark.webp" alt="nocard" width={16} height={16} />
        <CreditCardCaption>Não é necessário cartão de crédito </CreditCardCaption>
          <Rate src="/media/rating.webp" alt="rating" width={92} height={16} />
        <RateCaption>4,9/5 de satisfação</RateCaption>
        </CreditCardRateContainer>

      </DownSubtitle>
    </HeroSection>
  );
};

export default DownBanner;
