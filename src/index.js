import React from 'react';
import { render } from 'react-dom'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import solitaireApp from './reducers/Reducer';
import './index.css';

let store = createStore(solitaireApp);

render(
    <Provider store={store}>
        <App />
    </Provider>
       , document.getElementById('root'));
registerServiceWorker();
