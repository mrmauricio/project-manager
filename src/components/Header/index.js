import React from 'react';
import { MdDeveloperMode, MdEdit } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Notifications from '../Notifications';

import { Container, Logo, Profile, User } from './styles';
import { colors } from '../../styles/colors';

export default function Header() {
    const userProfile = useSelector(({ user: { profile } }) => ({
        name: `${profile.name.first} ${profile.name.last}`,
        email: profile.email,
        avatar: profile.avatar,
        id: profile.id,
    }));

    return (
        <Container>
            <div>
                <Logo>
                    <Link to="/home">
                        <MdDeveloperMode size={55} color={colors.lightCyan30} />
                        <div>
                            <strong>Project</strong>
                            <strong>Manager</strong>
                        </div>
                    </Link>
                </Logo>
                <User>
                    <Notifications id={userProfile.id} />

                    <Profile>
                        <div>
                            <strong>{userProfile.name}</strong>
                            <span>{userProfile.email}</span>
                        </div>
                        <img src={userProfile.avatar} alt={userProfile.name} />
                    </Profile>

                    <span>
                        <Link to="/profile">
                            <MdEdit size={20} color={colors.black} />
                        </Link>
                    </span>
                </User>
            </div>
        </Container>
    );
}
