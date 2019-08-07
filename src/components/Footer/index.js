import React from 'react';

import { GoMarkGithub } from 'react-icons/go';

import { Container } from './styles';

export default function Footer() {
    return (
        <Container>
            <span>Project Manager - 2019</span>
            <div>
                <GoMarkGithub size={20} color="#191920" />
                <a href="https://github.com/mrmauricio"> mrmauricio</a>
            </div>
        </Container>
    );
}
