import styled from 'styled-components';

import { device } from '../../styles/sizes';

export const Container = styled.header`
    @import url('https://fonts.googleapis.com/css?family=Righteous&display=swap');

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 50px 0;
    padding: 0 20px;

    @media ${device.tablet} {
        flex-direction: column;
        padding: 0;
        margin: 0;

        aside {
            width: 100vw;
        }

        > nav {
            display: none;
        }
    }

    @media ${device.mobileXL} {
        > nav {
            display: flex;
            margin: 50px 0;
        }

        aside {
            height: 80px;
        }
    }
`;

export const Logo = styled.nav`
    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        user-select: none;

        svg {
            stroke: #191920;
            stroke-width: 0.6;
            margin: 0 5px;
        }

        div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            color: #fff;
            line-height: 0.9;
            font-size: 35px;
            font-family: 'Righteous', cursive;
            text-shadow: -0.75px -0.75px 0 #191920, 0.75px -0.75px 0 #191920,
                -0.75px 0.75px 0 #191920, 0.75px 0.75px 0 #191920;
        }

        @media ${device.tablet} {
            margin-right: 30px;
            padding-right: 30px;
            border-right: 1px solid #eee;

            div {
                font-size: 25px;
            }
        }

        @media ${device.mobileXL} {
            margin: 0;
            border: 0;

            div {
                font-size: 35px;
            }
        }
    }
`;

export const User = styled.aside`
    display: flex;
    align-items: center;

    background: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    padding: 10px 20px;
    width: 425px;

    > span {
        margin-left: 20px;
        padding-left: 20px;
        border-left: 1px solid #eee;
    }

    > nav {
        display: none;
    }

    @media ${device.tablet} {
        > nav {
            display: flex;
        }
    }

    @media ${device.mobileXL} {
        > nav {
            display: none;
        }
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 1;

    div {
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        margin: 0 10px;
        color: #191920;
        font-size: 16px;

        strong {
            text-transform: capitalize;
            text-align: end;

            text-overflow: ellipsis;
            overflow: hidden;
            width: 190px;
            height: 1.2em;
            white-space: nowrap;
        }

        span {
            font-size: 13px;
            text-align: end;

            text-overflow: ellipsis;
            overflow: hidden;
            width: 190px;
            height: 1.2em;
            white-space: nowrap;
        }
    }

    img {
        width: 50px;
        background: #fff;
        border-radius: 50%;
        padding: 2px;
        border: 1px solid #191920;
    }
`;
