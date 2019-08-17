import React from 'react';
import { MdEdit, MdAdd } from 'react-icons/md';

import { Container, Profile, Icons, AddTeam } from './styles';

export default function Team({ admin }) {
    return (
        <Container>
            {admin && (
                <>
                    <Profile>
                        <img
                            src="https://avatars.dicebear.com/v2/jdenticon/.svg"
                            alt="avatar"
                        />
                        <div>
                            <strong>Equipe X</strong>
                            <div>
                                <span>Web Development</span>
                                <span>Created on 2019</span>
                                <span>Managed by Maurício</span>
                            </div>
                        </div>
                    </Profile>
                    <Icons>
                        <MdEdit size={20} color="#191920" />
                    </Icons>
                </>
            )}
            {!admin && (
                <AddTeam to="/">
                    <MdAdd size={50} color="#191920" />
                    <span>Create Team</span>
                </AddTeam>
            )}
        </Container>
    );
}
