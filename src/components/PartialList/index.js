import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MdWork, MdLaptopMac, MdEdit, MdPerson } from 'react-icons/md';

import {
    List,
    Title,
    Project,
    ProjectTitle,
    ProjectDefinitions,
    Buttons,
    User,
    Profile,
    Icons,
} from './styles';

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

    // dynamically render images
    const images = require.context('../../assets/icons', true);
    // const imgSrc = images(`./react.svg`);

    switch (title) {
        case 'Projects':
            icon = <MdWork size={35} color="#ebfcfc" />;
            break;
        case 'Developers':
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
                                <Project key={project.id}>
                                    <ProjectTitle>
                                        <header>
                                            <strong>{project.name}</strong>
                                            <MdEdit size={20} color="#191920" />
                                        </header>
                                        <div>
                                            <strong>Goal:</strong>
                                            <div>{project.goal}</div>
                                        </div>
                                    </ProjectTitle>
                                    <ProjectDefinitions>
                                        <div>
                                            <strong>Stack:</strong>
                                            <ul>
                                                {project.technology.map(
                                                    technology => {
                                                        return (
                                                            <li
                                                                key={
                                                                    technology.id
                                                                }
                                                            >
                                                                <div>
                                                                    <img
                                                                        src={images(
                                                                            `${technology.icon}`
                                                                        )}
                                                                        alt=""
                                                                    />
                                                                    <span>
                                                                        {
                                                                            technology.name
                                                                        }
                                                                    </span>
                                                                </div>
                                                            </li>
                                                        );
                                                    }
                                                )}
                                            </ul>
                                        </div>
                                        <div id="team">
                                            <strong>Team:</strong>
                                            <ul>
                                                {project.person.map(person => {
                                                    return (
                                                        <li key={person.id}>
                                                            <MdPerson
                                                                size={20}
                                                                color="#191920"
                                                            />
                                                            <span>
                                                                {`${person.name.first} ${person.name.last}`}
                                                                <span>
                                                                    {`   <${person.email}>`}
                                                                </span>
                                                            </span>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    </ProjectDefinitions>
                                </Project>
                            );
                        })}
                    </>
                )}
                {title === 'Developers' && (
                    <>
                        {users.map(user => {
                            return (
                                <User key={user.id}>
                                    <Profile>
                                        <img src={user.avatar} alt="avatar" />
                                        <div>
                                            <strong>
                                                {user.name.first}{' '}
                                                {user.name.last}
                                            </strong>
                                            <span>{user.email}</span>
                                        </div>
                                    </Profile>
                                    <Icons>
                                        <MdEdit size={20} color="#191920" />
                                    </Icons>
                                </User>
                            );
                        })}
                    </>
                )}
            </div>
            <Buttons>
                <Link to={addButton.route}>
                    <button type="button">{addButton.text}</button>
                </Link>
                <Link to={showButton.route}>
                    <button type="button">{showButton.text}</button>
                </Link>
            </Buttons>
        </List>
    );
}

PartialList.propTypes = {
    title: PropTypes.string.isRequired,
    addButton: PropTypes.objectOf(PropTypes.string).isRequired,
    showButton: PropTypes.objectOf(PropTypes.string).isRequired,
};
