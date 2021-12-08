import React from 'react';

class CartItem extends React.Component {
    render(){
        return(
            <div className="cart-item">
                <div className="left-bock">
                    <img style={styles.image}/>
                </div>
                <div className="right-block" >
                    <div style={{fontSize :35 }}>Phone</div>
                    <div style={{color : "#777"}}>Rs 999</div>
                    <div style={{color : "#777"}}>Qty </div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
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