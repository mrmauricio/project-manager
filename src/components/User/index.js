import React from 'react';
import PropTypes from 'prop-types';
import { MdEdit } from 'react-icons/md';

import { Container, Profile, Icons } from './styles';

export default function User({ id, avatar, firstName, lastName, email }) {
    return (
        <Container key={id}>
            <Profile>
                <img src={avatar} alt="avatar" />
                <div>
                    <strong>
                        {firstName} {lastName}
                    </strong>
                    <span>{email}</span>
                </div>
            </Profile>
            <Icons>
                <MdEdit size={20} color="#191920" />
            </Icons>
        </Container>
    );
}

User.propTypes = {
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
};
