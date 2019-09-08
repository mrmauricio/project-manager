import React from 'react';

import { GoMarkGithub } from 'react-icons/go';

import { Container } from './styles';
import { colors } from '../../styles/colors';

export default function Footer() {
    return (
        <Container>
            <span>Project Manager - 2019</span>
            <div>
                <GoMarkGithub size={20} color={colors.black} />
                <a href="https://github.com/mrmauricio"> mrmauricio</a>
            </div>
        </Container>
    );
}
