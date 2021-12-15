import React from "react";
import Cart from './Cart';
import Navbar from "./Navbar";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
        products: [
            {
                title : 'Phone',
                price : 19999,
                qty : 0,
                img :'https://images.unsplash.com/photo-1580910051074-3eb694886505?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
                id:1
            },
            {
                title : 'Laptop',
                price : 89999,
                qty : 0,
                img : 'https://images.unsplash.com/photo-1586077427825-15dca6b44dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
                id:2
            },
            {
                title : 'Keyboard',
                price : 2999,
                qty : 0,
                img : 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80',
                id:3
            },
            {
              title : 'Coffee',
              price : 499,
              qty : 0,
              img :'https://images.unsplash.com/photo-1590082871875-064201a27373?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
              id:1
          },
          {
              title : 'Bag',
              price : 999,
              qty : 0,
              img : 'https://images.unsplash.com/photo-1581605405669-fcdf81165afa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
              id:2
          },
          {
              title : 'Router',
              price : 2999,
              qty : 0,
              img : 'https://images.unsplash.com/photo-1626177275306-4245f57e32b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=719&q=80',
              id:3
          },
          {
            title : 'Water Bottle',
            price : 999,
            qty : 0,
            img :'https://images.unsplash.com/photo-1559549569-76ad43c35738?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
            id:1
        },
        {
            title : 'Mouse',
            price : 1599,
            qty : 0,
            img : 'https://images.unsplash.com/photo-1563297007-0686b7003af7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1217&q=80',
            id:2
        },
        {
            title : 'Headphones',
            price : 25999,
            qty : 0,
            img : 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1165&q=80',
            id:3
        }
        ]
    }

    
}
handleIncreaseQty = (product)=>{
    console.log('Increase the qty',product);
    const {products} = this.state;
    var index = products.indexOf(product);

    products[index].qty += 1;
    this.setState({
        products
    })
}
handleDecreaseQty = (product)=>{
    const {products}= this.state;
    var index = products.indexOf(product);
    if(products[index].qty){
        products[index].qty -= 1;
    }
    this.setState({
        products
    })
    
}
handleDelete = (id)=> {
    const {products} = this.state;
    const {items} = products.filter(item => item.id !== id);
    this.setState({
        products:items
    })

}
getCartCount = ()=> {
  const {products} = this.state;

  let count=0;
  products.forEach((product)=>{
    count += product.qty;
  })
  return count;
}
totalPrice = ()=> {
  const {products} = this.state;
  let tPrice = 0;

  products.forEach((product)=>{
    tPrice =tPrice+product.price*product.qty; 
  })
  return tPrice;
}
  render(){
    const {products} = this.state;
  return (
    <div className="App">
      <Navbar count={this.getCartCount()}/>
      <Cart 
         products={products}
         handleIncreaseQty={this.handleIncreaseQty}
         handleDecreaseQty={this.handleDecreaseQty}
         
      />
      <div style={style}>
          TOTAL:{this.totalPrice()}
      </div>
    </div>
  );
  }
}
const style = {
  position:'relative',
  left:200,
  right:50,
  fontWeight:800,
  fontSize:30,
  padding:20
}


export default App;
