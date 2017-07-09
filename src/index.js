import React from 'react';
import { render } from 'react-dom'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore,applyMiddleware } from 'redux'
import solitaireApp from './reducers/Reducer';
import './index.css';
import {MOVE_CARDS,INCREMENT_MOVES} from './actions/Actions';

let moveMiddleWare = store => next => action => {
    if(action.type === MOVE_CARDS){
        store.dispatch({type:INCREMENT_MOVES});
    }
  let result = next(action);
  return result
};

let store = createStore(solitaireApp, applyMiddleware(moveMiddleWare));
console.log(store.getState());
render(
    <Provider store={store}>
      <App /> 
    </Provider>
       , document.getElementById('root'));
registerServiceWorker();
