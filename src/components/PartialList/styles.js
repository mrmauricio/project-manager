import styled from 'styled-components';

export const List = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin: 20px 10px;

    background: #ebfcfc;
`;

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

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

export const Project = styled.div`
    display: flex;
    flex-direction: column;

    background: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    margin: 15px;
    padding: 15px;
`;

export const ProjectTitle = styled.div`
    > strong {
        font-size: 19px;
    }

    > div {
        padding-top: 10px;
        margin-top: 10px;
        border-top: 1px solid #eee;
        font-size: 15px;

        display: flex;

        div {
            margin-left: 10px;
        }
    }
`;

export const ProjectDefinitions = styled.div`
    div {
        margin-top: 15px;
        display: flex;
        font-size: 15px;

        ul li {
            list-style: none;
            display: inline-block;
            margin-left: 10px;
            margin-bottom: 10px;
            padding: 2px 15px;
            font-weight: bold;
            font-size: 13px;
            border-radius: 16px;
            background: #fff;
            color: #191920;
            border: 0;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
        }
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;

    div {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        margin: 0 10px;
        color: #191920;
        font-size: 16px;

        span {
            font-size: 13px;
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
export const User = styled.div`
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    margin: 15px;
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
`;

export const Icons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    span {
        padding: 3px;
    }
`;
