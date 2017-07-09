import {MOVE_CARDS,INCREMENT_MOVES}from '../actions/Actions';
import initializeState from '../stateInitializer';
import undoable, { distinctState } from 'redux-undo';
import { combineReducers } from 'redux';
var initialState = initializeState();

function setCardValues(cards,obj) {
return cards.map(card => {
        return Object.assign(card,obj)    
    });
}

function moves(state=0,action){
    switch(action.type){
            case INCREMENT_MOVES:
            return state + 1;
        default:
            return state;
    }
}

function board(state = initialState,action) {
    switch (action.type) {
    case MOVE_CARDS:
            if(action.fromId === action.toId){
                return state;
            }
        let newState = JSON.parse(JSON.stringify(state));
        newState[action.fromId] = JSON.parse(JSON.stringify(state[action.fromId].slice(0,action.position)));
        var lastCard = newState[action.fromId][newState[action.fromId].length-1];
        if(lastCard){
        lastCard.isDraggable=true;
        lastCard.isShowing=true;    
        }   
        newState[action.toId] = JSON.parse(JSON.stringify(state[action.toId].concat(action.cards)));
        return newState;
    default:
      return state;

    }
};

const undoableBoard = undoable(board,{
    filter:distinctState()
});

const solitaireApp = combineReducers({
    board:undoableBoard,
    moves:moves
});

export default solitaireApp;