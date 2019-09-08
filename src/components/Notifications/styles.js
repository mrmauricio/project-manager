import styled, { css } from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { colors } from '../../styles/colors';

export const Container = styled.div`
    margin-right: 2rem;
    padding-right: 2rem;
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
                width: .8rem;
                height: .8rem;
                background: ${colors.orange};
                /* tag obrigatória */
                content: '';
                border-radius: 50%;
            }
        `}
`;

export const NotificationList = styled.div`
    position: absolute;
    width: 42.5rem;
    /* calcula onde é o lugar que corresponde a 50% e então subtrai 130px, que
    é metade da width, da posição, fazendo ficar no meio com o sino*/
    left: calc(100% - 6rem);
    top: calc(100% + 2.8rem);
    background: ${colors.white};

    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    display: ${props => (props.visible ? 'block' : 'none')};

    /* antes de abrir o elemento notificationList é inserida a seta, feita com
    css e posicionada bem ao centro desta */
    &::after {
        content: '▲';
        text-shadow: 0 -1px 1px rgba(0, 0, 0, 0.25);
        color: ${colors.white};
        font-size: 2.5rem;
        position: absolute;
        left: calc(0% + 1.75rem);
        top: -2.3rem;
        width: 0;
        height: 0;
    }

    header {
        position: absolute;
        width: 42.5rem;
        height: 3rem;
        background: ${colors.white};
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);

        display: flex;
        align-items: center;
        justify-content: center;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;

        span {
            font-size: 1.3rem;
        }
    }

    footer {
        position: absolute;
        width: 42.5rem;
        height: 3rem;
        background: ${colors.white};

        border-top: 1px solid rgba(0, 0, 0, 0.1);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;

        display: flex;
        align-items: center;
        justify-content: center;

        button {
            font-size: 1.3rem;
            border: 0;
            background: none;
            padding: 0 0.5rem;
            margin: 0 0.5rem;

            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`;

export const Scroll = styled(PerfectScrollbar)`
    margin-top: 3rem;
    max-height: 35rem;
    /*padding: 5px 15px;*/
`;

export const Notification = styled.div`
    color: ${colors.black};
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: ${props => (props.unread ? colors.lightCyan30 : colors.white)};

    img {
        width: 5rem;
        background: ${colors.white};
        border-radius: 50%;
        padding: 0.2rem;
        border: 1px solid #191920;
        margin-right: 1.5rem;
    }

    div {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
    }

    /* toda notificação que for seguida por uma anterior, no caso a primera
    será ignorada, aplicando esse efeito pra 2ª 3ª 4ª etc */
    & + div {
        padding-top: 1.5rem;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
    }

    p {
        font-size: 1.3rem;
        line-height: 1.8rem;
    }

    time {
        margin-top: 0.7rem;
        font-size: 1.2rem;
        opacity: 0.6;
    }
`;
