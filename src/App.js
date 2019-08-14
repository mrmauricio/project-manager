import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import GlobalStyle from './styles/global';
import Routes from './routes/index';
import history from './services/history';

import store from './store';

function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Routes />
                <GlobalStyle />
                <ToastContainer autoclose={3000} />
            </Router>
        </Provider>
    );
}

export default App;
