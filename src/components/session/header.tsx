
import { styled } from 'styled-components'
import Logo from '../logo';


const HeaderPage = styled.header`
    background: #0B0B0B;
    box-shadow: 0px 4px 4px rgba(61, 61, 61, 0.25);
    position: fixed;
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
`;

const BlockPageUl = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap:40px;

`;

const LinkPage = styled.li`
    font-size: 14px;
    display: flex;
    align-items: center;
    color: var(--colorTextPrimary);
    text-transform: uppercase;
`;

const BlocHeader = styled.div`
    max-width: 1250px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`;

export default function header() {
    return (
        <HeaderPage>

            <BlocHeader>
                <Logo />
                <BlockPageUl>
                    <LinkPage>Inicio</LinkPage>
                    <LinkPage>Sobre mim</LinkPage>
                    <LinkPage>Habilidades</LinkPage>
                    <LinkPage>Certificações</LinkPage>
                    <LinkPage>Projetos</LinkPage>
                    <LinkPage>Contatos</LinkPage>
                </BlockPageUl>
            </BlocHeader>
        </HeaderPage>
    )
}
