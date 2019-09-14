import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const Title = styled.h1`
    background: ${colors.cyan};
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    margin: 1.25rem 0.5rem;
    min-height: 5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        stroke: ${colors.black};
        stroke-width: 0.7;
        margin: 0 0.75rem;
    }

    strong {
        color: ${colors.white};
        letter-spacing: 0.1rem;
        font-size: 3rem;
        text-shadow: -0.75px -0.75px 0 ${colors.black},
            0.75px -0.75px 0 ${colors.black}, -0.75px 0.75px 0 ${colors.black},
            0.75px 0.75px 0 ${colors.black};
    }
`;
