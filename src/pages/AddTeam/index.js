import React from 'react';
import { MdLaptopMac } from 'react-icons/md';

import { MainContainer } from '../../components/styles/MainContainer/styles';
import { Title } from '../../components/styles/Title/styles';
import { colors } from '../../styles/colors';

export default function AddTeam() {
    return (
        <MainContainer>
            <div>
                <Title>
                    <MdLaptopMac size={35} color={colors.lightCyan30} />
                    <strong>New Team</strong>
                </Title>
            </div>
        </MainContainer>
    );
}
