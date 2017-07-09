import React, { Component } from 'react';
import Constants from './Constants';
import CardPile from './CardPile.js';
import { connect } from 'react-redux';
import  { moveCards } from './actions/Actions';
import { setCardValues } from './stateInitializer';
import './App.css';

const mapStateToProps = (state,ownProps) => {
    return {
    waste:state[Constants.GAME_BOARD].present[Constants.WASTE],
    stock:state[Constants.GAME_BOARD].present[Constants.STOCK]
  }
}

const mapDispatchToProps = dispatch => {
  return {
     moveCardDispatcher:(cards,position,fromId,toId) =>{
         dispatch(moveCards(cards,position,fromId,toId))
     } 
  }
}

function deepCopy (arr) {
	var out = [];
	for (var i = 0, len = arr.length; i < len; i++) {
		var item = arr[i];
		var obj = {};
		for (var k in item) {
			obj[k] = item[k];
		}
		out.push(obj);
	}
    return out;
}

class WasteStock extends Component {
    constructor(props){
        super(props);
        this.stockClicked = this.stockClicked.bind(this);
    }
    stockClicked(event){
        if(this.props.stock.length === 0 ){
            this.props.moveCardDispatcher(this.props.waste.slice(0),0,Constants.WASTE,Constants.STOCK);
        }else{
             this.props.moveCardDispatcher(this.props.stock.slice(this.props.stock.length-1),this.props.stock.length-1,Constants.STOCK,Constants.WASTE);
        }
    }
    render() {
        const stockCards = setCardValues(deepCopy(this.props.stock),{isDraggable:false,isShowing:false});
        return (
            <div id="waste_stock_container" className="clearfix">
            <div id="waste" style={{
                height:Constants.CARD_HEIGHT+'px',
                width:Constants.CARD_WIDTH+'px'
            }} >
            <CardPile cards={this.props.waste} isStraight={true} type={Constants.WASTE}/>
            </div>
            <div id="stock" style={{
                height:Constants.CARD_HEIGHT+'px',
                position:'relative',
                width:Constants.CARD_WIDTH+'px',
                border:'2px solid black',
                borderRadius:'5px',
                cursor:"pointer"
            }} onClick={(e)=>this.stockClicked(e)}>
           
            <img src="/refresh_icon.png" width="47px" height="47px" style={{position:'absolute',
                      margin: 'auto',top: '0',left: '0',righ: '0',bottom: '0',right:'0'}}/>
            <CardPile cards={stockCards} isStraight={true} type={Constants.STOCK}/>
            </div>
        </div>
        );
    }
}
let ConnectedWasteStock =  connect(
  mapStateToProps,
 mapDispatchToProps   
)(WasteStock);

export default ConnectedWasteStock;