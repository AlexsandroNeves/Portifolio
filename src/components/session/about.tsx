import React from 'react'
import TitlePage from '../titlePage'
import { styled } from 'styled-components';
import ImgAbout from '../../assets/imgAbout.svg'


const BlockAbout = styled.div`
    background: #0B0B0B;
    height: 500px;
    
`;

const AboutDescription = styled.p`
  color:var(--colorTextPrimary);
  font-size: 1rem;
  line-height: 23px;
  width: 700px;
`;

const BlockContainer = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
`;

export default function about() {
  return (
    <BlockAbout>
      <TitlePage children={'Sobre mim'} />

      <BlockContainer>
        <div>
          <img src={ImgAbout} width={300} alt="" />
        </div>

        <div>
          <AboutDescription>
            Olá, tenho 26 anos e resido na cidade de Praia Grande-SP. Formado em Análise e
            Desenvolvimento de Sistemas na Universidade Paulista, trabalho com desenvolvimento
            aproximadamente 4 anos. Durante esse tempo, trabalhei com diversas tecnologias.
          </AboutDescription>
        </div>
      </BlockContainer>
    </BlockAbout>
  )
}
