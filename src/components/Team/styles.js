import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    margin: 1.5rem 1.5rem 0;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    height: 100px;
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;

    > div {
        display: flex;
        flex-direction: column;
        align-self: flex-start;
        margin: 0 1rem;
        color: ${colors.black};
        font-size: 1.8rem;

        div {
            display: flex;
            flex-direction: column;
            margin-top: 1.5rem;
        }

        span {
            font-size: 1.3rem;

            span {
                text-transform: capitalize;
            }
        }

        strong {
            text-transform: capitalize;
        }
    }

    img {
        width: 8rem;
        background: ${colors.white};

        padding: 0.2rem;
        border: 1px solid rgba(0, 0, 0, 0.7);
        border-radius: 4px;
    }
`;

export const Icons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.3rem;
`;

export const AddTeam = styled.div`
    opacity: 0.2;
    color: ${colors.black};
    text-decoration: none;
    background: rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.15);
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        text-decoration: none;
        color: ${colors.black};
    }

    span {
        font-size: 3rem;
        padding-left: 0.5rem;
    }
`;
