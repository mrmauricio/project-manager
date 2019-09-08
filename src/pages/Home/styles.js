import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
    max-width: 1020px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
    background: ${colors.lightCyan30};
    border-radius: 4px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);

    > div {
        flex: 1;
    }
`;
