import styled from 'styled-components';

// import { device } from '../../styles/sizes';

export const List = styled.section`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin: 20px 10px;
    background: #ebfcfc;
`;

export const Buttons = styled.div`
    padding-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
        padding: 7.5px 15px;
        margin: 5px 15px;

        font-weight: bold;
        font-size: 14px;
        border-radius: 16px;

        background: #fff;
        color: #191920;
        border: 0;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    }
`;

export const Title = styled.div`
    background: #6ddbd7;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    margin: 5px;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        stroke: #191920;
        stroke-width: 0.7;
        margin: 0 7.5px;
    }

    strong {
        color: #fff;
        letter-spacing: 1px;
        font-size: 30px;
        text-shadow: -0.75px -0.75px 0 #191920, 0.75px -0.75px 0 #191920,
            -0.75px 0.75px 0 #191920, 0.75px 0.75px 0 #191920;
    }
`;
