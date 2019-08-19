import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MdWork, MdLaptopMac, MdGroup } from 'react-icons/md';

import User from '../User';
import Project from '../Project';
import Team from '../Team';

import { List, Title, Buttons } from './styles';

export default function PartialList({ title, addButton, showButton }) {
    const technologies = useSelector(state => state.technologies);

    const users = useSelector(state => state.users);

    const projects = useSelector(state =>
        state.projects.map(project => ({
            ...project,
            technology: project.technologyId.map(techId =>
                technologies.find(t => t.id === techId)
            ),
            person: project.personId.map(personId =>
                users.find(p => p.id === personId)
            ),
        }))
    );

    let icon;

    switch (title) {
        case 'Projects':
            icon = <MdWork size={35} color="#ebfcfc" />;
            break;
        case 'Developers':
            icon = <MdGroup size={35} color="#ebfcfc" />;
            break;
        case 'Team':
            icon = <MdLaptopMac size={35} color="#ebfcfc" />;
            break;
        default:
            icon = '';
            break;
    }

    return (
        <List>
            <div>
                <Title>
                    {icon}
                    <strong>{title}</strong>
                </Title>
                {title === 'Projects' && (
                    <>
                        {projects.map(project => {
                            return (
                                <Project
                                    key={project.id}
                                    id={project.id}
                                    name={project.name}
                                    goal={project.goal}
                                    technology={project.technology}
                                    person={project.person}
                                />
                            );
                        })}
                    </>
                )}
                {title === 'Team' && <Team admin />}
                {title === 'Developers' && (
                    <>
                        {users.map(user => {
                            return (
                                <User
                                    key={user.id}
                                    id={user.id}
                                    avatar={user.avatar}
                                    firstName={user.name.first}
                                    lastName={user.name.last}
                                    email={user.email}
                                />
                            );
                        })}
                    </>
                )}
            </div>
            <Buttons>
                {addButton && (
                    <Link to={addButton.route}>
                        <button type="button">{addButton.text}</button>
                    </Link>
                )}
                {showButton && (
                    <Link to={showButton.route}>
                        <button type="button">{showButton.text}</button>
                    </Link>
                )}
            </Buttons>
        </List>
    );
}

PartialList.propTypes = {
    title: PropTypes.string.isRequired,
    addButton: PropTypes.objectOf(PropTypes.string),
    showButton: PropTypes.objectOf(PropTypes.string),
};

PartialList.defaultProps = {
    addButton: null,
    showButton: null,
};
