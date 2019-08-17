import styled from 'styled-components';

export const Container = styled.div`
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    margin: 15px;
    padding: 10px 10px;
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
        margin: 0 10px;
        color: #191920;
        font-size: 16px;

        span {
            font-size: 13px;
        }

        strong {
            text-transform: capitalize;
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

export const Icons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3px;
`;
