import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    background: ${colors.white};
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    margin: 0.75rem 1.5rem;
    padding: 1.5rem 1.5rem 0.5rem;
`;

export const ProjectTitle = styled.div`
    margin-bottom: 0.5rem;

    header {
        display: flex;
        align-content: center;
        justify-content: space-between;
        font-size: 1.2rem;

        h2 {
            margin: 0 0.5rem;
        }
    }

    > p {
        padding-top: 1rem;
        margin: 1rem 0.5rem 0;
        border-top: 1px solid ${colors.gray};
        font-size: 1.5rem;
        text-align: justify;

        display: flex;
    }
`;

export const ProjectDefinitions = styled.div`
    #team {
        padding-bottom: 0.5rem;
        margin-bottom: 1rem;
        border-bottom: 1px solid ${colors.gray};
        margin-left: 0.2rem;

        ul li {
            width: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            border-radius: 4px;
            padding: 0.2rem 0;
            font-size: 1.3rem;
            font-weight: normal;
            cursor: pointer;

            &:hover {
                background: ${colors.white};
                box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
                transform: translateY(-1px);
            }

            span {
                display: flex;
                align-items: center;
            }

            span:last-child {
                text-transform: none;
                color: ${colors.darkCyan30};
            }
        }
    }

    > div {
        display: flex;
        font-size: 1.5rem;

        :first-child {
            margin-top: 1rem;
        }

        ul {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            padding: 0 0.3rem;
            width: 100%;

            li {
                list-style: none;
                width: 25%;
                margin-bottom: 1rem;
                font-weight: bold;
                font-size: 1.1rem;
                text-transform: capitalize;

                &:hover {
                    background: ${colors.lightCyan30};
                    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
                    transform: translateY(-1px);
                }

                div {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    margin: 0.5rem 0;
                    user-select: none;

                    img {
                        width: 3rem;
                        margin-bottom: 0.5rem;
                    }
                }
            }
        }
    }
`;
