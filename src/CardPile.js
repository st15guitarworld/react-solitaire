import React, {Component} from 'react';
import { DragSource } from 'react-dnd';
import { DragTarget } from 'react-dnd';
import DraggableCard from './DraggableCard'
import Constants from './Constants';
import './App.css';

export default class CardPile extends Component {
    constructor(props){
        super(props);
        this.gatherCards = this.gatherCards.bind(this);
        this.getCardPile = this.getCardPile.bind(this);
    }
    
    
    cardisEmpty(){
        return !this.props.Card;
    }
    
    listIsEmpty() {
        return !this.props.List;
    }
    
    isDraggableEmpty() {
        return !this.props.isDraggable;
    }
    
    isVisibleEmpty() {  
        return !this.props.isVisible;
    }
    
    getCardPile(){
        return this.props.cards;
    }

    gatherCards(props){
        
        if(!props || !props.cards){
            return null;
        }
        
        return props.cards.map((card,index) => {
            return <DraggableCard key={index} position={index} type={this.props.type} isStraight={this.props.isStraight} offset_top={this.props.isStraight ? 0 : Constants.CARD_OFFSET_TOP * index } isDraggable={card.isDraggable} image={card.image} value={card.value} suit={card.suit} isShowing={card.isShowing} getCardPile={() => this.getCardPile()}></DraggableCard>
            });   
    }
    
    render() {
        
        return(
            <div className="card_pile" style={{
            position:'relative',
            height:Constants.CARD_HEIGHT+'px',
            width:Constants.CARD_WIDTH+'px',
            overflow:'visible'
            }}>
            
            {this.gatherCards(this.props)}
            </div>
        );
    }
}