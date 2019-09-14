import React, { useState, useEffect } from 'react';
import { MdWork, MdLaptopMac, MdGroup } from 'react-icons/md';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import PartialList from '../../components/PartialList';
import Project from '../../components/Project';
import User from '../../components/User';
import Team from '../../components/Team';

import { MainContainer } from '../../components/styles/MainContainer/styles';
import { Section, SectionWrapper, Buttons } from './styles';

import { Title } from '../../components/styles/Title/styles';
import { colors } from '../../styles/colors';

export default function Home() {
    const [personData, setPersonData] = useState([]);
    const [projectData, setProjectData] = useState([]);

    // componentDidMount
    useEffect(() => {
        async function loadData() {
            const data = await Promise.all([
                api.get('person'),
                api.get('project?_sort=id&_order=desc'), // ?_limit=5&endDate=open&_sort=id&_order=desc
            ]);

            const [personList, projectList] = data;

            setPersonData(personList.data);
            setProjectData(projectList.data);
        }
        loadData();
    }, []);

    return (
        <MainContainer>
            <Section>
                {projectData.length > 0 && (
                    <>
                        <Title>
                            <MdWork size={35} color={colors.lightCyan30} />
                            <strong>Projects</strong>
                        </Title>
                        {projectData.map(project => {
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
                        <Buttons>
                            <Link to="/projects/new">
                                <button type="button">New Project</button>
                            </Link>

                            <Link to="/projects">
                                <button type="button">Show All</button>
                            </Link>
                        </Buttons>
                    </>
                )}
            </Section>
            <SectionWrapper>
                <Section>
                    <Title>
                        <MdLaptopMac size={35} color={colors.lightCyan30} />
                        <strong>Team</strong>
                    </Title>
                    <Team />
                </Section>

                <Section>
                    {personData.length > 0 && (
                        <>
                            <Title>
                                <MdGroup size={35} color={colors.lightCyan30} />
                                <strong>Developers</strong>
                            </Title>
                            {personData.map(user => {
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
                            <Buttons>
                                <Link to="/users">
                                    <button type="button">Show All</button>
                                </Link>
                            </Buttons>
                        </>
                    )}
                </Section>
            </SectionWrapper>
        </MainContainer>
    );
}
