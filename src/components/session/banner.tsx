
import ImgBanner from '../../assets/imgBanner.svg'

import { styled } from 'styled-components'

import Linkedin from '../../assets/linkedin.png'
import Github from '../../assets/github.png'

const Banner = styled.div`
    height: 100vh;
    background: #0F0F0F; 
`;

const BlockPosition = styled.div`
    max-width: 1250px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items:center ;
    justify-content: space-between;
`;

const BlockbannerImg = styled.div`
  margin-top: 70px;
`;

const NameBanner = styled.p`
    font-weight: 700;
    font-size: 4rem;
    color: #FFFFFF;
`;

const MediaSocial = styled.div`
    display: flex;
    gap: 15px;
    margin-top: 20px;
`;

const DescriptionBanner = styled.p`
    font-weight: 400;
    font-size: 32px;
    color: #00AD6F;
    text-shadow: 0px 0px 10px #00AD6F;
`;


export default function banner() {
    return (
        <Banner>
            <BlockPosition>
                <div>
                    <NameBanner>Alexsandro Neves</NameBanner>
                    <DescriptionBanner>Desenvolvedor Web</DescriptionBanner>
                    <MediaSocial>
                        <a href="https://www.linkedin.com/in/alexsandro-neves/" target='_blank'>
                        <img src={Linkedin} alt="Icone linkedin" />
                        </a>
                        <a href="https://github.com/AlexsandroNeves" target="_blank">
                        <img src={Github} alt='Icone Github'/>
                        </a>

                    </MediaSocial>
                </div>
                <BlockbannerImg>
                    <img src={ImgBanner} alt="Imagem do banner" width={650} />
                </BlockbannerImg>
            </BlockPosition>
        </Banner>
    )
}
