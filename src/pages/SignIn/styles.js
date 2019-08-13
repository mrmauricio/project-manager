import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Righteous&display=swap');

    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(-90deg, #489491, #6ddbd7);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    > div {
        display: flex;
        align-items: center;
        text-decoration: none;
        user-select: none;

        svg {
            stroke: #191920;
            stroke-width: 0.6;

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
    }

    form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;
        max-width: 315px;
        width: 90%;
        text-align: center;

        input {
            background: rgba(0, 0, 0, 0.1);
            border: 0;
            border-radius: 4px;
            height: 44px;
            padding: 0 15px;
            color: #fff;
            margin: 0 0 10px;
            transition: 0.2s;

            &::placeholder {
                color: rgba(255,255,255,0.7);
            }

            &:hover {
                transform: scale(1.01);
                background: rgba(0, 0, 0, 0.09);
            }
        }

        span {
            color: rgba(255, 0, 0, 0.5);
            /* alinhar um dos itens dentro da flexbox */
            align-self: flex-start;
            margin: 0 0 10px;
            font-size: 13px;
            font-weight: bold;
        }

        .error {
            box-shadow: 3px 3px 6px rgba(255, 0, 0, 0.25);
        }

        button {
            margin: 5px 0 0;
            height: 44px;
            background: #3b9eff;
            font-weight: bold;
            color: #fff;
            border: 0;
            border-radius: 4px;
            font-size: 16px;
            transition: 0.2s;

            &:hover {
                background: ${darken(0.03, '#3b9eff')};
            }
        }

        a {
            color: #fff;
            margin-top: 20px;
            font-size: 14px;
            opacity: 0.8;
            text-decoration: none;
            transition: 0.2s;

            &:hover {
                opacity: 1;
            }
        }
`;
