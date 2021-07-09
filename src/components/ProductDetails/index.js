import  { useEffect, useState } from 'react';
import React from 'react';
import "./index.css";
import axios from "axios";
import { ApiData } from '../../Utils/commonData.js';
import { useParams } from "react-router-dom";
import { addToCart } from "../../actions/index";
import { connect } from "react-redux";

const ProductDetails = (props) => {
    const [ProductDetails,setProductDetails]=useState([])
    const { id } = useParams();
    const [previewClicked,setPreviewClicked]=useState(0);
    const [isLoading,setIsLoading]=useState(false);
    
    const{
        name="",        
        photos=[],
        description="",
        brand="",
        price=""
    }=ProductDetails;    
   
    const handleClick=(id)=>{
        setPreviewClicked(id)
        // setPreviewImage(item)
        
    }
   
    useEffect(()=>{       
        
        axios.get(`${ApiData}/${id}`)
        .then(res=>{
           
            setProductDetails(res.data);
            setIsLoading(true)
        });
           
    },[id])
  
   
    return ( isLoading?<div id="product">    
    <div className="left-column">
      <img id="productImg" src={photos[previewClicked]} alt="previewImg"/>
    </div>
    <div className="right-column">
      <div className="product-description">
        <h1 id="name">{name}</h1>
        <h3 id="brand">{brand}</h3>
        <h3>Price: Rs <span id="price">{price}</span></h3>
        <div className="description">
          <h3>Description</h3>
          <p id="description">{description}</p>
        </div>
        <div className="product-preview">
          <h3>Product Preview</h3>
          <div className="previewImg">
              {photos.map((item,index)=>{ 
              return <img key={index} className={previewClicked===index?"active":""} src={item} alt={index} onClick={()=>handleClick(index)}/>
              })}             
          </div>
        </div>
      </div>
        <div className="btn">
          <button id="add-to-cart" onClick={()=>{
              const cartItem = props.cart;
              let indexOfNewProduct = cartItem.findIndex(
                  (item) => item.id === ProductDetails.id
              );
              if (indexOfNewProduct === -1) {
                  cartItem.push(ProductDetails);
                  console.log(ProductDetails)
                  ProductDetails.quantity = 1;
                  props.addProductToCart(cartItem);
              } else {
                  cartItem[indexOfNewProduct].quantity += 1;
                  props.addProductToCart(cartItem);
              }

          }}>Add to Cart</button>
        </div>
    </div> 

    </div> :<div style={{padding:"90px 50px"}}><h1>Loading.....</h1></div>)
}
const mapStateToProps = (state) => ({
  productList: state.productList,
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  addProductToCart: (product) => dispatch(addToCart(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
