import React from 'react';
import { MdDeveloperMode } from 'react-icons/md';

import { Container, Logo, User } from './styles';

export default function Header() {
    return (
        <Container>
            <Logo to="/">
                <MdDeveloperMode size={65} color="#ebfcfc" />
                <div>
                    <strong>Project</strong>
                    <strong>Manager</strong>
                </div>
            </Logo>
            <User>
                <div>
                    <strong>Admin</strong>
                    <span>admin@projectmanager.pt</span>
                </div>
                <img
                    src="https://avatars.dicebear.com/v2/bottts/5466.svg?options[colors][]=agreenmber&options[primaryColorLevel]=200&options[secondaryColorLevel]=500&options[textureChance]=100&options[mouthChance]=0"
                    alt=""
                />
            </User>
        </Container>
    );
}
