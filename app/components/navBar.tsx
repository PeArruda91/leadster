"use client"

import React from 'react';
import styled from 'styled-components';
import Image from "next/legacy/image";

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
`;

const Logo = styled(Image)`
  max-height: 50%;
`;

const Navbar = () => {
  return (
    <NavBar>
      <LogoWrapper>
        <Logo src="/media/logo.png" alt="Logo" layout="fixed" width={120} height={40} />
      </LogoWrapper>
    </NavBar>
  );
};

export default Navbar;
