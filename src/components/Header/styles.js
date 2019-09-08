import styled from 'styled-components';

import { colors } from '../../styles/colors';

export const Container = styled.header`
    padding: 4rem 0;
    background: ${colors.darkCyan15};
    margin-bottom: 3rem;

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1020px;
        margin: 0 auto;
    }
`;

export const Logo = styled.nav`
    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        user-select: none;

        svg {
            stroke: ${colors.black};
            stroke-width: 0.6;
            margin-right: 0.5rem;
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
`;

export const User = styled.aside`
    display: flex;
    align-items: center;

    background: ${colors.white};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    padding: 1rem 2rem;
    width: 42.5rem;

    > span {
        margin-left: 2rem;
        padding-left: 2rem;
        border-left: 1px solid ${colors.gray};
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
        margin: 0 1rem;
        color: ${colors.black};
        font-size: 1.6rem;

        strong {
            text-transform: capitalize;
            text-align: end;

            text-overflow: ellipsis;
            overflow: hidden;
            width: 19rem;
            height: 1.9rem;
            white-space: nowrap;
        }

        span {
            font-size: 1.3rem;
            text-align: end;

            text-overflow: ellipsis;
            overflow: hidden;
            width: 19rem;
            height: 1.6rem;
            white-space: nowrap;
        }
    }

    img {
        width: 5rem;
        height: 5rem;
        background: ${colors.white};
        border-radius: 50%;
        padding: 0.2rem;
        border: 1px solid ${colors.black};
    }
`;
