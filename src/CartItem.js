import React from 'react';

const CartItem = (props)=> {
        const {price , title , qty } = props.product;
        const {product,increaseQty,decreaseQty}= props;
        
        return(
            <div className="cart-item">
                <div className="left-bock">
                    <img className='l-image' alt={product.title} src={product.img}/>
                </div>
                <div className="right-block" >
                    <div style={{fontSize :35 }}>{title}</div>
                    <div style={{color : "#777"}}>Rs {price}</div>
                    <div style={{color : "#777"}}>Qty: {qty} </div>
                    <div className="cart-item-actions">
                        
                        <img alt="Increase" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/992/992651.png" onClick={()=>increaseQty(product)}>
                        </img>
                        <img alt="Decrease" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/992/992683.png" onClick={()=>decreaseQty(product)}>

                        </img>
                        {/* <img alt="Delete" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" >

                        </img> */}

                    </div>
                </div>
            </div>
        );
    
}


export default CartItem;