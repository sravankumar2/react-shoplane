import React from 'react';
import "./index.css";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, emptyCart, removeFromCart } from "../../actions/index";


const Checkout = (props) => {
    const{cart,clearCart}=props;
  
    const increaseQuantity=(id)=>{
    
    let indexOfNewProduct = cart.findIndex(
        (prod) => prod.id === id
    );
    cart[indexOfNewProduct].quantity += 1;
        props.addQuantityToCart(cart);
    }
    const decreaseQuantity=(id)=>{
        
        let indexOfNewProduct = cart.findIndex(
            (prod) => prod.id === id
        );
        if(cart[indexOfNewProduct].quantity>1){
            cart[indexOfNewProduct].quantity -= 1;
            props.decQuantityFromCart(cart);
        
        }
        else{
            alert("Pleace Order atleast One Quantity")
        }
    }
    const removeFromCart=(id)=>{
       const popItem=cart.findIndex((prod) => prod.id === id)
        cart.splice(popItem,1)
        props.removeFromCartItems(cart)
    }
   const totalAmount = cart.length > 0 ? cart.map(prod => prod.quantity * prod.price).reduce((total, value) => total + value) : 0;
    return (
    
        <div className="content-wrapper">
            
            <div className="left-section">
                <p className="item-count">Total items: <span>{cart.length}</span> </p>
                {cart.map(item =>                            
                    <div className="checkout-card-wrapper" key={item.id}>
                        <img className="checkout-card-image" src={item.preview} alt={item.name} />
                        <div className="checkout-card-content">
                            <p className="checkout-card-header">{item.name}</p>
                            <p className="checkout-item-count">x{item.quantity}</p>
                            <p className="checkout-item-amount">Amount: Rs {item.price}</p>
                        </div>
                     <div className="alteration">                    
                        {/* <p onClick={()=>decreaseQuantity(item.id)}>decre</p> */}
                        <span><i onClick={()=>decreaseQuantity(item.id)} className="far fa-minus-square"></i></span>
                        <span> {item.quantity} </span>
                        {/* <p onClick={()=>increaseQuantity(item.id)}>incre</p> */}
                       <span><i onClick={()=>increaseQuantity(item.id)} className="far fa-plus-square"></i></span>
                    </div>
                   <span><i onClick={()=>removeFromCart(item.id)} className="fas fa-times-circle"></i></span> 
                    {/* <button className="btn-remove" onClick={()=>removeFromCart(item.id)}>Remove</button>   */}
                </div>                 
                )}                           
                                            

            </div>
            <div className="right-section">
                <div className="place-order-card">
                    <h2>Total amount</h2>
                    <p className="checkout-total-amount">Amount: Rs <span>{totalAmount}</span> </p>
                    {cart.length > 0 ? <Link to="/PlaceOrder" className="place-order-button" onClick={() => clearCart()}>Place Order</Link> : <Link to="/checkout" className="place-order-button" onClick={() => alert("Add item to place the order!")}>Place Order</Link>}
                </div>
            </div>
        </div >
    );
}





const mapStateToProps = (state) => ({
    cart: state.cart
})

const mapDispatchToProps = (dispatch) => ({
    addQuantityToCart: (product) => dispatch(addToCart(product)),
    decQuantityFromCart: (product) => dispatch(addToCart(product)),
    removeFromCartItems :(product) =>dispatch(removeFromCart(product)) ,  
    clearCart: () =>
        dispatch(emptyCart([])),     
        
})



export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
