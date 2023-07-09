"use client"

import React from 'react';
import styled from 'styled-components';
import Image from "next/image";

export const NavBar = styled.nav`
  background-color: #ffffff;
  height: 60px;
  display: flex;
  flex-direction: column; /* Added */
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    height: 40px;
  }
`;

export const LogoWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled(Image)`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  transform: scale(1); 

  @media (max-width: 767px) {  
    transform: scale(1); 
  }
`;

export const Tagline = styled.p`
  font-size: 10px;
  color: #666666;
  margin-top: 10px;
`;

const FooterBar = () => {
  return (
    <NavBar>
      <LogoWrapper>
        <Logo src="/media/logo.png" alt="Logo" width={160} height={60} />
        <Tagline>Transformando visitantes em clientes.</Tagline>
      </LogoWrapper>
    </NavBar>
  );
};

export default FooterBar;
