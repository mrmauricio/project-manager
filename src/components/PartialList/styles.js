import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const List = styled.section`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin: 2rem 1rem;
    background: ${colors.lightCyan30};
`;

export const Buttons = styled.div`
    padding-top: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
        padding: 0.75rem 1.5rem;
        margin: 0.5rem 1.5rem;

        font-weight: bold;
        font-size: 1.4rem;
        border-radius: 16px;
        width: 15rem;

        background: ${colors.white};
        color: ${colors.black};
        border: 0;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    }
`;

export const Title = styled.h1`
    background: ${colors.cyan};
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    margin: 0.5rem;
    height: 5rem;

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
