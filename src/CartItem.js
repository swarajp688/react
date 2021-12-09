import React from 'react';

class CartItem extends React.Component {
    constructor(){
        super();
        this.state = {
            title : 'Phone',
            price : 999,
            qty : 1,
            img : ''
        }

        
    }
    increaseQty = () =>{
        console.log("test",this.state);
    }
    render(){
        const {price , title , qty} = this.state;
        return(
            <div className="cart-item">
                <div className="left-bock">
                    <img alt='Product' style={styles.image}/>
                </div>
                <div className="right-block" >
                    <div style={{fontSize :35 }}>{title}</div>
                    <div style={{color : "#777"}}>Rs {price}</div>
                    <div style={{color : "#777"}}>Qty: {qty} </div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img alt="Increase" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/992/992651.png" onClick={this.increaseQty}>
                        </img>
                        <img alt="Decrease" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/992/992683.png">

                        </img>
                        <img alt="Delete" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png">

                        </img>

                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image :{
      height:110,
      width:110,
      borderRadius:4,
      background:"#ccc"
    }
  }
export default CartItem;