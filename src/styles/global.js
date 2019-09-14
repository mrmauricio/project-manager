import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

import { colors } from './colors';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Righteous&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    *:focus {
        outline: 0
    }

    html {
        font-size: 62.5%;
    }

    html, body, #root {
        min-height: 100%;
    }

    body {
        background: ${colors.cyan};
        -webkit-font-smoothing: antialiased !important;
    }

    body, input, button {
        font: 14px Roboto, sans-serif;
    }

    button {
        cursor: pointer;
    }

`;
