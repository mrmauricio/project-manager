import React from 'react';
import { MdDeveloperMode, MdEdit } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Notifications from '../Notifications';

import { Container, Logo, Profile, User } from './styles';

export default function Header() {
    const userProfile = useSelector(({ user: { profile } }) => ({
        name: `${profile.name.first} ${profile.name.last}`,
        email: profile.email,
        avatar: profile.avatar,
        id: profile.id,
    }));

    return (
        <Container>
            <Logo>
                <Link to="/home">
                    <MdDeveloperMode size={65} color="#ebfcfc" />
                    <div>
                        <strong>Project</strong>
                        <strong>Manager</strong>
                    </div>
                </Link>
            </Logo>
            <User>
                <Logo>
                    <Link to="/home">
                        <MdDeveloperMode size={45} color="#ebfcfc" />
                        <div>
                            <strong>Project</strong>
                            <strong>Manager</strong>
                        </div>
                    </Link>
                </Logo>

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
                        <MdEdit size={20} color="#191920" />
                    </Link>
                </span>
            </User>
        </Container>
    );
}
