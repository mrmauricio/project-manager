import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
    text-align: center;
    margin: 6rem 0;

    div {
        margin-top: 1rem;

        display: flex;
        text-align: center;
        justify-content: center;

        a {
            padding: 0.2rem 0.5rem;
            text-decoration: none;
            font-weight: bold;
            color: ${colors.black};
        }
    }
`;
