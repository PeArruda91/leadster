"use client"

import React from 'react';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FooterContainer = styled.footer`
  background-color: #f4f4f4;
  padding: 30px 0;
  color: #555;
  font-size: 14px;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const Column = styled.div``;

const ColumnTitle = styled.h4`
  font-weight: bold;
  margin-bottom: 10px;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
`;

const LinkListItem = styled.li`
  margin-bottom: 5px;
`;

const Link = styled.a`
  color: #555;
  text-decoration: none;
`;

const SocialIcons = styled.ul`
  display: flex;
  padding: 0;
  justify-content: center;
  list-style: none
`;

const SocialIconItem = styled.li`
  margin-right: 10px;
`;

const IconLink = styled.a`
  color: #555;
  text-decoration: none;
`;

const ContactInfo = styled.div`
  margin-top: 20px;
`;

const Address = styled.p`
  font-size: 12px;
  color: #888;
  text-align: center;
`;

const FooterText = styled.p`
  text-align: center;
  font-size: 12px;
  color: #888;
  margin-top: 20px;

  span{
    color: blue;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Column>
          <ColumnTitle>Links Principais</ColumnTitle>
          <LinkList>
            <LinkListItem><Link href="https://leadster.com.br/" target="_blank" rel="noopener noreferrer">Home</Link></LinkListItem>
            <LinkListItem><Link href="https://leadster.com.br/geracao-de-leads/" target="_blank" rel="noopener noreferrer">Ferramenta</Link></LinkListItem>
            <LinkListItem><Link href="https://leadster.com.br/preco/" target="_blank" rel="noopener noreferrer">Preços</Link></LinkListItem>
            <LinkListItem><Link href="https://leadster.com.br/contato/" target="_blank" rel="noopener noreferrer">Contato</Link></LinkListItem>
          </LinkList>
        </Column>
        <Column>
          <ColumnTitle>Cases</ColumnTitle>
          <LinkList>
            <LinkListItem><Link href="https://leadster.com.br/estudo-de-caso/isaac/" target="_blank" rel="noopener noreferrer">Geração de Leads B2B</Link></LinkListItem>
            <LinkListItem><Link href="https://leadster.com.br/leads-qualificados-com-anuncios/" target="_blank" rel="noopener noreferrer">Geração de Leads em Software</Link></LinkListItem>
            <LinkListItem><Link href="https://leadster.com.br/estudo-de-caso/rafael-cassio/" target="_blank" rel="noopener noreferrer">Geração de Leads em Imobiliária</Link></LinkListItem>
            <LinkListItem><Link href="https://leadster.com.br/estudo-de-caso/" target="_blank" rel="noopener noreferrer">Cases de Sucesso</Link></LinkListItem>
          </LinkList>
        </Column>
        <Column>
          <ColumnTitle>Materiais</ColumnTitle>
          <LinkList>
            <LinkListItem><Link href="https://leadster.com.br/blog/" target="_blank" rel="noopener noreferrer">Blog</Link></LinkListItem>
            <LinkListItem><Link href="https://leadster.com.br/agencias-parceiras/" target="_blank" rel="noopener noreferrer">Parceria com Agências</Link></LinkListItem>
            <LinkListItem><Link href="https://leadster.com.br/web-stories/" target="_blank" rel="noopener noreferrer">Guia Definitivo de Marketing</Link></LinkListItem>
            <LinkListItem><Link href="https://leadster.com.br/materiais/" target="_blank" rel="noopener noreferrer">Materiais Gratuitos</Link></LinkListItem>
          </LinkList>
        </Column>
        <Column>
          <ColumnTitle>Siga a Leadster</ColumnTitle>
          <SocialIcons>
            <SocialIconItem>
              <IconLink href="https://www.linkedin.com/company/getleadster/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </IconLink>
            </SocialIconItem>
            <SocialIconItem>
              <IconLink href="https://www.facebook.com/leadsterplatform" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} />
              </IconLink>
            </SocialIconItem>
            <SocialIconItem>
              <IconLink href="https://www.instagram.com/leadster.com.br/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </IconLink>
            </SocialIconItem>
          </SocialIcons>
          <ContactInfo>
            <p>Email: contato@leadster.com.br</p>
            <p>Telefone: (42) 98828-9851</p>
          </ContactInfo>
        </Column>
      </FooterContent>
      <Address>Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000</Address>
      <FooterText>&copy; 2015-2023 Todos direitos reservados | <span>Leadster</span></FooterText>
    </FooterContainer>
  );
};

export default Footer;