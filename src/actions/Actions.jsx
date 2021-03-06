
export const FETCH_CARDS='FETCH_CARDS';
export const FETCH_CARDS_ERROR='FETCH_CARDS_ERROR';
export const FETCH_CARDS_SUCCESS='FETCH_CARDS_SUCCESS';
export const MOVE_CARDS='MOVE_CARDS';
export const INCREMENT_MOVES="INCREMENT_MOVES";

export function moveCards(cards,position,fromId,toId){
    return {
        type:MOVE_CARDS,
        cards,
        position,
        fromId,
        toId
    };
}

export function incrementMoves(){
    return {
        type:INCREMENT_MOVES
    };
}