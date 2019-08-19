import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    margin: 15px 15px 0;
    padding: 10px;
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
        margin: 0 10px;
        color: #191920;
        font-size: 18px;

        div {
            display: flex;
            flex-direction: column;
            margin-top: 15px;
        }

        span {
            font-size: 13px;
        }

        strong {
            text-transform: capitalize;
        }
    }

    img {
        width: 80px;
        background: #fff;

        padding: 2px;
        border: 1px solid rgba(0, 0, 0, 0.7);
        border-radius: 4px;
    }
`;

export const Icons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3px;
`;

export const AddTeam = styled(Link)`
    opacity: 0.2;
    color: #000;
    text-decoration: none;
    background: rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.15);
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    span {
        font-size: 30px;
        padding-left: 5px;
    }
`;
