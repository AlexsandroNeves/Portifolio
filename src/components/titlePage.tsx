import React from 'react'
import { styled } from 'styled-components'

interface Props {
    children: string
}


const Titlepage = styled.h2`
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 50px;
text-align: center;
color: #FFFFFF;
padding-top: 50px;
text-transform: uppercase;

`;

export default function titlePage({ children }: Props) {
    return (
        <Titlepage>{children}</Titlepage>
    )
}
