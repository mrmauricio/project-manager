import styled from 'styled-components';

import { device } from '../../styles/sizes';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    margin: 75px 0;
    background: #ebfcfc;
    border-radius: 4px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);

    > div {
        flex: 1;
    }

    @media ${device.laptop} {
        background: orange;
        flex-direction: column;

        #team-dev-list {
            order: -1;
            color: red;
        }
    }

    @media ${device.tablet} {
        background: red;
        margin-top: 45px;
    }

    @media ${device.mobileL} {
        background: #ebfcfc;
    }
`;
