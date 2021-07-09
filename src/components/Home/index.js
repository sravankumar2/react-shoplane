import React from 'react';
import "./index.css";
import Card from "../Card";
import AnimatedIcons from '../AnimatedFeatur';
import DemoCarousel from '../Slider';
import { connect } from "react-redux";
import { getProductList } from "../../actions/index"
const Home = ({productList}) => {
   
    return(
        <>
        <DemoCarousel/>
        <AnimatedIcons/>
            <div className="clothing-wrapper">
            <h2 className="clothing-item">Clothing for Men and Women</h2>
                <div className="card-wrapper">
                    {productList.map(product => (product.isAccessory) || <Card {...product} key={Math.random()} />)}
                </div>
            </div>
            <h2 className="clothing-item">Accessories for Men and Women</h2>
                <div className="card-wrapper">
                    {productList.map(product => !(product.isAccessory) || <Card {...product} key={Math.random()} />)}
            </div>
        </>
    );
}
const mapStateToProps = (state) => ({
    productList: state.productList,
    cart: state.cart

})

const mapDispatchToProps = (dispatch) => ({
    updateProductList: (productList) => dispatch(getProductList(productList))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)