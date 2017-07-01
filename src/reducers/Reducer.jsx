import {FETCH_CARDS,FETCH_CARDS_SUCCESS,FETCH_CARDS_ERROR, MOVE_CARDS} from '../actions/Actions';
import initializeState from '../stateInitializer';

var initialState = initializeState();

function setCardValues(cards,obj) {
return cards.map(card => {
        return Object.assign(card,obj)    
    });
}

export default function solitaireApp(state = initialState,action) {
    switch (action.type) {
    case MOVE_CARDS:
            if(action.fromId === action.toId){
                return state;
            }
        let newProps = {};
        newProps[action.fromId] = state[action.fromId].slice(0,action.position);
        var lastCard = newProps[action.fromId][newProps[action.fromId].length-1];
        if(lastCard){
        lastCard.isDraggable=true;
        lastCard.isShowing=true;    
        }   
        newProps[action.toId] = state[action.toId].concat(action.cards);
        return Object.assign({}, state,newProps);
    default:
      return state;

    }
};