import styled, { css } from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const Container = styled.div`
    margin-right: 20px;
    padding-right: 20px;
    border-right: 1px solid #eee;

    position: relative;
`;

export const Badge = styled.button`
    background: none;
    border: 0;
    position: relative;

    ${props =>
        props.hasUnread &&
        css`
            /* adicionar conteúdo antes dos estilos do button fecharem*/
            &::after {
                position: absolute;
                right: 0
                top: 0;
                width: 8px;
                height: 8px;
                background: #ff892e;
                /* tag obrigatória */
                content: '';
                border-radius: 50%;
            }
        `}
`;

export const NotificationList = styled.div`
    position: absolute;
    width: 425px;
    /* calcula onde é o lugar que corresponde a 50% e então subtrai 130px, que
    é metade da width, da posição, fazendo ficar no meio com o sino*/
    left: calc(100% - 60px);
    top: calc(100% + 28px);
    background: #fff;

    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    display: ${props => (props.visible ? 'block' : 'none')};
    /*padding: 15px 5px;*/

    /* antes de abrir o elemento notificationList é inserida a seta, feita com
    css e posicionada bem ao centro desta */
    &::after {
        content: '▲';
        text-shadow: 0 -1px 1px rgba(0, 0, 0, 0.25);
        color: #fff;
        font-size: 25px;
        position: absolute;
        left: calc(0% + 17.5px);
        top: -23px;
        width: 0;
        height: 0;
    }

    header {
        position: absolute;
        width: 425px;
        height: 30px;
        background: #fff;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);

        display: flex;
        align-items: center;
        justify-content: center;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;

        span {
            font-size: 13px;
        }
    }

    footer {
        position: absolute;
        width: 425px;
        height: 30px;
        background: #fff;

        border-top: 1px solid rgba(0, 0, 0, 0.1);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;

        display: flex;
        align-items: center;
        justify-content: center;

        button {
            font-size: 13px;
            border: 0;
            background: none;
            padding: 0 5px;
            margin: 0 5px;

            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`;

export const Scroll = styled(PerfectScrollbar)`
    margin-top: 30px;
    max-height: 350px;
    /*padding: 5px 15px;*/
`;

export const Notification = styled.div`
    color: #191920;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: ${props => (props.unread ? '#ebfcfc' : '#fff')};

    img {
        width: 50px;
        background: #fff;
        border-radius: 50%;
        padding: 2px;
        border: 1px solid #191920;
        margin-right: 15px;
    }

    div {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
    }

    /* toda notificação que for seguida por uma anterior, no caso a primera
    será ignorada, aplicando esse efeito pra 2ª 3ª 4ª etc */
    & + div {
        padding-top: 15px;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
    }

    p {
        font-size: 13px;
        line-height: 18px;
    }

    time {
        margin-top: 7px;
        font-size: 12px;
        opacity: 0.6;
    }
/*
    ${props =>
        props.unread &&
        css`
            &::after {
                content: '';
                display: inline-block;
                width: 7px;
                height: 7px;
                background: #ff892e;
                border-radius: 50%;
            }
        `}*/
`;
