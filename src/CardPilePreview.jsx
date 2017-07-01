import React, {Component} from 'react';
import { DragSource } from 'react-dnd';
import Card from './DraggableCard'
import Constants from './Constants'

class CardPilePreview extends Component {
    constructor(props) {
        super(props);
        this.gatherCards = this.gatherCards.bind(this);
        this.getCardPile = this.getCardPile.bind(this);
    }
    
    getCardPile(){
        return this.props.cards;
    }
    
    gatherCards(props){
        return props.cards.map((card,index) => 
            {
            return <Card key={index} position={index} offset_top={this.props.isStraight ? 0 : Constants.CARD_OFFSET_TOP * index}  image={card.image} value={card.value} suit={card.suit} isShowing={card.isShowing}></Card>
            });   
    }
    
    render() {
        if(!this.props.cards){
           return null; 
        }
        
        return(
            <div className="card_pile_preview" style={{
                    position:'relative'
                }}>
            {this.gatherCards(this.props)}
            </div>
        );
    }
    
}

export default CardPilePreview;