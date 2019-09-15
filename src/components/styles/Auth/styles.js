import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Righteous&display=swap');

    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(-45deg, ${colors.darkCyan30}, ${colors.cyan});
    overflow-y: auto;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    > div {
        display: flex;
        align-items: center;
        text-decoration: none;
        user-select: none;

        svg {
            stroke: ${colors.black};
            stroke-width: 0.6;
        }

        div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            color: ${colors.white};
            line-height: 0.9;
            font-size: 3.5rem;
            font-family: 'Righteous', cursive;
            text-shadow: -0.75px -0.75px 0 ${colors.black},
                0.75px -0.75px 0 ${colors.black},
                -0.75px 0.75px 0 ${colors.black},
                0.75px 0.75px 0 ${colors.black};
        }
    }

    form {
        display: flex;
        flex-direction: column;
        margin: 3rem 0;
        max-width: 315px;
        width: 90%;
        text-align: center;

        > input {
            background: rgba(0, 0, 0, 0.1);
            border: 0;
            border-radius: 4px;
            height: 4.4rem;
            padding: 0 1.5rem;
            color: #fff;
            margin-bottom: 1rem;
            font-size: 1.5rem;
            transition: 0.2s;

            &::placeholder {
                color: rgba(255, 255, 255, 0.9);
                text-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
            }

            &:hover {
                background-color: rgba(0, 0, 0, 0.15);
            }
        }

        > span {
            color: rgba(255, 0, 0, 0.7);
            /* alinhar um dos itens dentro da flexbox */
            align-self: flex-start;
            margin: -0.9rem 0 1rem;
            padding: 0.3rem 1.5rem;
            width: 100%;
            font-size: 1.1rem;
            text-align: left;
            background: rgba(255, 255, 255, 0.6);
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
        }

        .error {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }

        .radio {
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 3.4rem;
            margin-bottom: 1.5rem;

            div {
                background: rgba(0, 0, 0, 0.1);
                border-radius: 4px;
                transition: 0.2s;
                color: rgba(255, 255, 255, 0.7);

                &:hover {
                    transform: translateY(-1px);
                    background-color: rgba(0, 0, 0, 0.15);
                    color: ${colors.white};
                }

                label {
                    display: flex;
                    align-items: center;
                    padding: 1rem;
                    cursor: pointer;

                    span {
                        padding-left: 0.3rem;
                    }
                }
            }
        }

        button {
            margin-top: 0.5rem;
            height: 4.4rem;
            background: ${colors.blue};
            font-weight: bold;
            color: ${colors.white};
            border: 0;
            border-radius: 4px;
            font-size: 1.6rem;
            transition: 0.2s;

            &:hover {
                background: ${colors.lightblue};
            }
        }

        a {
            color: #fff;
            margin-top: 2rem;
            font-size: 1.5rem;
            text-shadow: 0 1px 1px rgba(0, 0, 0, 0.35);
            text-decoration: none;
            transition: 0.2s;
            border-radius: 4px;

            &:hover {
                text-decoration: underline;
            }
        }
    }
`;
