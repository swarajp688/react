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
        //setState form 1
        // this.setState({
        //     qty:this.state.qty + 1
        // });
        this.setState((prevState)=>{
            return {
                qty : prevState.qty + 1
            }
        })
    }
    decreaseQty = ()=>{
        this.setState((prevState)=>{
            if(prevState.qty){
                return {
                    qty:prevState.qty -1
                }
            }
            else {
                return null;
            }
            
        });
    }
    render(){
        const {price , title , qty} = this.state;
        return(
            <div className="cart-item">
                <div className="left-bock">
                    <img style={styles.image}/>
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
                        src="https://cdn-icons-png.flaticon.com/512/992/992683.png" onClick={this.decreaseQty}>

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