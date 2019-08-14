// na web, esse storage usado pelo redux-persist é o localstorage
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
    const persistedReducer = persistReducer(
        {
            // chave que será armazenada no localStorage
            key: 'project-manager',
            storage,
            // no whitelist são colocados os nomes dos reducers a ser armazenados
            whiteList: ['auth', 'user'],
        },
        reducers
    );

    return persistedReducer;
};
