"use client"

import React from 'react';
import styled from 'styled-components';
import Image from "next/image";

export const NavBar = styled.nav`
  background-color: #ffffff;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    height: 40px;
  }
`;

export const LogoWrapper = styled.div`
  height: 100%;
  display: flex;
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



const FooterBar = () => {
  return (
    <NavBar>
      <LogoWrapper>
        <Logo src="/media/logo.png" alt="Logo" width={120} height={40} />
      </LogoWrapper>
    </NavBar>
  );
};

export default FooterBar;
