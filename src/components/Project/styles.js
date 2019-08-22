import styled from 'styled-components';

import { device } from '../../styles/sizes';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    background: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    margin: 15px;
    padding: 15px 15px 5px;
`;

export const ProjectTitle = styled.div`
    header {
        display: flex;
        align-content: center;
        justify-content: space-between;

        strong {
            font-size: 19px;
        }
    }

    > div {
        padding-top: 10px;
        margin-top: 10px;
        border-top: 1px solid #eee;
        font-size: 15px;
        text-align: justify;

        display: flex;

        div {
            margin-left: 10px;
        }
    }
`;

export const ProjectDefinitions = styled.div`
    > div {
        display: flex;
        font-size: 15px;

        :first-child {
            margin-top: 10px;
        }

        strong {
            margin-top: 3px;
        }

        ul {
            li {
                list-style: none;
                display: inline-block;
                margin-left: 10px;
                margin-bottom: 10px;
                padding: 2px 15px;
                font-weight: bold;
                font-size: 13px;
                border-radius: 16px;
                text-transform: capitalize;
                background: #fff;
                color: #191920;
                border: 0;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);

                div {
                    display: flex;
                    align-items: center;

                    img {
                        width: 20px;
                        padding: 1px;
                        margin-right: 6px;
                    }
                }
            }
        }
    }

    #team {
        padding-top: 15px;
        margin-top: 10px;
        border-top: 1px solid #eee;

        ul li {
            display: flex;
            align-items: center;

            @media ${device.mobileXL} {
                svg {
                    display: none;
                }
                span {
                    margin: 0;

                    span {
                        display: block;
                    }
                }
            }

            span {
                margin-left: 3px;
                margin-top: 3px;

                span {
                    text-transform: none;
                    color: #46918f;
                }
            }
        }
    }
`;
