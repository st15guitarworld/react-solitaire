import getShuffledDeck from './cardService';

export function setCardValues(cards,obj) {
return cards.map(card => {
        return Object.assign(card,obj)    
    });
}

export default function initializeState(){
    var cards = getShuffledDeck();
    
    let tableuOneCards = setCardValues(cards.splice(0,1),{isDraggable:true,isShowing:true});
    
    
    let tableuTwoCards = setCardValues(cards.splice(0,2),{isDraggable:false,isShowing:false});
    tableuTwoCards = tableuTwoCards.slice(0,1).concat(setCardValues(tableuTwoCards.slice(1),{isDraggable:true,isShowing:true}));
    
    
    
    let tableuThreeCards = setCardValues(cards.splice(0,3),{isDraggable:false,isShowing:false});
    tableuThreeCards = tableuThreeCards.slice(0,2).concat(setCardValues(tableuThreeCards.slice(2),{isDraggable:true,isShowing:true}));
    
    
    let tableuFourCards = setCardValues(cards.splice(0,4),{isDraggable:false,isShowing:false});
    tableuFourCards = tableuFourCards.slice(0,3).concat(setCardValues(tableuFourCards.slice(3),{isDraggable:true,isShowing:true}));
    
    
    let tableuFiveCards = setCardValues(cards.splice(0,5),{isDraggable:false,isShowing:false});
    tableuFiveCards = tableuFiveCards.slice(0,4).concat(setCardValues(tableuFiveCards.slice(4),{isDraggable:true,isShowing:true}));
    
    
    let tableuSixCards = setCardValues(cards.splice(0,6),{isDraggable:false,isShowing:false});
    tableuSixCards = tableuSixCards.slice(0,5).concat(setCardValues(tableuSixCards.slice(5),{isDraggable:true,isShowing:true}));
    
    
    let wasteCards = setCardValues(cards.splice(0,1),{isDraggable:true,isShowing:true});
    let stockCards = setCardValues(cards.splice(0),{isDraggable:true,isShowing:true});
    console.log(stockCards);
    
    var state={
    FOUNDATION_PILE_HEARTS:[],
    FOUNDATION_PILE_SPADES:[],
    FOUNDATION_PILE_CLOVERS:[],
    FOUNDATION_PILE_DIAMONDS:[],
    
    TABLEAU_ONE:tableuOneCards,
    TABLEAU_TWO:tableuTwoCards,
    TABLEAU_THREE:tableuThreeCards,
    TABLEAU_FOUR:tableuFourCards,
    TABLEAU_FIVE:tableuFiveCards,
    TABLEAU_SIX:tableuSixCards,
        
    WASTE:wasteCards,
    STOCK:stockCards
    };

    return state;
}