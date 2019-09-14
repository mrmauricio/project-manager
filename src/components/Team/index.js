import React from 'react';
import { MdEdit, MdAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Container, Profile, Icons, AddTeam } from './styles';
import { colors } from '../../styles/colors';

export default function Team() {
    const userProfile = useSelector(state => state.user.profile);

    let hasTeam;
    let name;
    let platform;
    let createdAt;
    let manager;
    let avatar;

    if (!userProfile.team) {
        hasTeam = false;
    } else {
        hasTeam = true;
        ({ name, platform, createdAt, manager, avatar } = userProfile.team);
    }

    const { admin } = userProfile;

    return (
        <Container>
            {hasTeam && (
                <>
                    <Profile>
                        <img src={avatar} alt="avatar" />
                        <div>
                            <strong>{name}</strong>
                            <div>
                                <span>{platform}</span>
                                <span>Created on {createdAt}</span>
                                <span>
                                    Managed by{' '}
                                    <span>
                                        {manager.name.first} {manager.name.last}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </Profile>
                    <Icons>
                        <MdEdit size={20} color={colors.black} />
                    </Icons>
                </>
            )}
            {admin && !hasTeam && (
                <AddTeam>
                    <Link to="/teams/new">
                        <MdAdd size={50} color={colors.black} />
                        <span>Create Team</span>
                    </Link>
                </AddTeam>
            )}
            {!admin && !hasTeam && (
                <AddTeam>
                    <span>No team found</span>
                </AddTeam>
            )}
        </Container>
    );
}

/*
Team.propTypes = {
    admin: PropTypes.bool.isRequired,
    hasTeam: PropTypes.bool.isRequired,
    name: PropTypes.string,
    platform: PropTypes.string,
    createdAt: PropTypes.string,
    manager: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.objectOf(PropTypes.string),
    }),
};

Team.defaultProps = {
    name: null,
    platform: null,
    createdAt: null,
    manager: null,
}; */
