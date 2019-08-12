import React, { useState } from 'react';
import { MdDeveloperMode } from 'react-icons/md';
import { useSelector } from 'react-redux';

import { Container, Logo, User } from './styles';

export default function Header() {
    const [loading, setLoading] = useState(false);

    const users = useSelector(state =>
        state.users.find(user => user.admin === true)
    );

    if (users && !loading) {
        setLoading(true);
    }

    return (
        <Container>
            <Logo to="/home">
                <MdDeveloperMode size={65} color="#ebfcfc" />
                <div>
                    <strong>Project</strong>
                    <strong>Manager</strong>
                </div>
            </Logo>
            <User>
                <div>
                    <strong>
                        {loading
                            ? `${users.name.first} ${users.name.last} `
                            : ''}
                    </strong>
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
