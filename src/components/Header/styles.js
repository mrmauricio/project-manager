import styled from 'styled-components';

export const Container = styled.header`
    @import url('https://fonts.googleapis.com/css?family=Righteous&display=swap');

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 50px 0;
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;

    svg {
        stroke: #191920;
        stroke-width: 0.6;
        margin: 0 5px;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #fff;
        line-height: 0.9;
        font-size: 35px;
        font-family: 'Righteous', cursive;
        text-shadow: -0.75px -0.75px 0 #191920, 0.75px -0.75px 0 #191920,
            -0.75px 0.75px 0 #191920, 0.75px 0.75px 0 #191920;
    }
`;

export const User = styled.div`
    display: flex;
    align-items: center;
    background: #ebfcfc;
    border: 0.75px solid #191920;
    border-radius: 4px;
    padding: 10px;

    div {
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        margin: 0 10px;
        color: #191920;

        span {
            font-size: 11px;
        }
    }

    img {
        width: 50px;
        background: #fff;
        border-radius: 50%;
        padding: 2px;
        border: 1px solid #191920;
    }
`;
