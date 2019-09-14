import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    flex: 1;

    margin: 2rem 1rem;
`;

export const SectionWrapper = styled.div`
    flex: 1;
`;

export const Buttons = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-evenly;
    height: 100%;
    margin: 1.5rem;

    button {
        padding: 0.75rem 1.5rem;

        font-weight: bold;
        font-size: 1.2rem;
        border-radius: 16px;
        width: 15rem;

        background: ${colors.white};
        color: ${colors.black};
        border: 0;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
    }
`;
