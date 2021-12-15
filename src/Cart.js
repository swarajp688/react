import React from 'react';
import CartItem from './CartItem';


const Cart = (props)=> {
    
    
        const {products} = props;
        return ( 
            <div className='cart'>
                {products.map((product)=>{
                    return (<CartItem 
                        product={product}
                        key={product.id}
                        increaseQty={props.handleIncreaseQty}
                        decreaseQty={props.handleDecreaseQty}
                        // onDelete={this.handleDelete}
                        />)
                })}
                
            </div>
        );
    
}


export default Cart;