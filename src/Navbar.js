import React from "react";

const Navbar = (props)=> {
    
        return (
            <div style={myStyle.nav}>
                <div style={myStyle.navHeading}>
                    <h5 >Cart App</h5>
                </div>
                <div >
                    <img style={myStyle.cartIcon} alt='cart-icon' src="https://cdn-icons.flaticon.com/png/512/2838/premium/2838895.png?token=exp=1639570695~hmac=a2645fe6651b43bd42dd66ef77fe681f" ></img>
                    <span style={myStyle.cartSpan}>{props.count}</span>
                </div>
            </div>
            
        );
    
}

const myStyle = {
    nav : {
        width:'auto',
        height:50,
        background:'#ccc',
        margin:0,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        position:'relative'
    },
    cartIcon : {
        width:40,
        height:40,
        
    },
    cartSpan : {
        position:'relative',
        top:-18,
        fontSize:25,
        marginRight:50

    },
    navHeading: {
        fontSize:20,
        position:'relative',
        top:-10,
        marginLeft:50
    }
}

export default Navbar;