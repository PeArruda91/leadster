"use client"

import React from 'react';
import styled from 'styled-components';
import Image from "next/image";

const NavBar = styled.nav`
  background-color: #ffffff;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled(Image)`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  transform: scale(1.5); /* Reduz a altura e largura em 25% */
`;

const Navbar = () => {
  return (
    <NavBar>
      <LogoWrapper>
        <Logo src="/media/logo.png" alt="Logo" width={120} height={40} />
      </LogoWrapper>
    </NavBar>
  );
};

export default Navbar;
