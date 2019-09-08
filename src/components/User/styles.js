import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
    background: ${colors.white};
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    margin: 1.5rem;
    padding: 1rem 1rem;
    display: flex;
    justify-content: space-between;
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;

    div {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        margin: 0 1rem;
        color: ${colors.black};
        font-size: 1.6rem;

        span {
            font-size: 1.3rem;
        }

        strong {
            text-transform: capitalize;
        }
    }

    img {
        width: 5rem;
        background: ${colors.white};
        border-radius: 50%;
        padding: 0.2rem;
        border: 1px solid ${colors.black};
    }
`;

export const Icons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.3rem;
`;
