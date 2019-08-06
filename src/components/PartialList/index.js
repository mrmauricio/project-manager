import React from 'react';

import { MdWork, MdLaptopMac, MdEdit, MdAdd } from 'react-icons/md';

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
    let icon;

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
                    <Project>
                        <ProjectTitle>
                            <strong>Project Manager</strong>
                            <div>
                                <strong>Goal:</strong>
                                <div>
                                    projetinho daora de teste que farei
                                    utilizando a stack do curso da rocketseat
                                </div>
                            </div>
                        </ProjectTitle>
                        <ProjectDefinitions>
                            <div>
                                <strong>Stack:</strong>
                                <ul>
                                    <li>React</li>
                                    <li>React Native</li>
                                    <li>NodeJS</li>
                                    <li>React</li>
                                    <li>React Native</li>
                                    <li>NodeJS</li>
                                </ul>
                            </div>
                            <div>
                                <strong>Team:</strong>
                                <ul>
                                    <li>Maurício #01</li>
                                    <li>Fantamo #02</li>
                                    <li>Vincent #03</li>
                                    <li>Maurício #01</li>
                                    <li>Fantamo #02</li>
                                    <li>Vincent #03</li>
                                </ul>
                            </div>
                        </ProjectDefinitions>
                    </Project>
                )}
                {title === 'Developers' && (
                    <User>
                        <Profile>
                            <img
                                src="https://avatars.dicebear.com/v2/avataaars/amm.svg"
                                alt=""
                            />
                            <div>
                                <strong>Maurício Mendes Rossi</strong>
                                <span>mendes-mauricio@outlook.com</span>
                            </div>
                        </Profile>
                        <Icons>
                            <span>
                                <MdEdit size={20} color="#191920" />
                            </span>
                            <span>
                                <MdAdd size={25} color="#191920" />
                            </span>
                        </Icons>
                    </User>
                )}
            </div>
            <Buttons>
                <button type="button">{addButton}</button>
                <button type="button">{showButton}</button>
            </Buttons>
        </List>
    );
}
