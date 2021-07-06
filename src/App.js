import { BrowserRouter, Switch, Route, } from 'react-router-dom';
import React, { useEffect } from 'react';
import './App.css';
import AnimatedIcons from './components/AnimatedFeatur';
import DemoCarousel from './components/Slider';
import Topbar from './components/Topbar';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import axios from "axios";
import { ApiData } from "./Utils/commonData";
import { connect } from "react-redux";
import { getProductList } from "./actions/index";
import Checkout from './components/CheckOut';
import Footer from './components/Footer';
import PlaceOrder from './components/PlaceOrder';
const App=(props)=>{

  const getProductsData = () => {
    axios.get(ApiData).then((response) => {
      props.updateProductList(response.data)
    })
  }
  useEffect(() => {
    getProductsData()
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Topbar/>
        
        <Switch>
        <Route path="/" exact component={Home}/>
          <Route path="/accessories"/>
          <Route path="/clothing"/>
          <Route path="/" exact component={Home}/>
          <Route path="/checkout" exact component={Checkout}/>
          <Route path="/PlaceOrder" exact component={PlaceOrder}/>
         
          <Route path="/product/:id" component={ProductDetails}/>
        </Switch>
        {/* <DemoCarousel/>
        <AnimatedIcons/> */}
      <Footer/>
      </BrowserRouter>
   
    </div>
  );
}

const mapStateToProps = (state) => ({
  productList: state.productList

})

const mapDispatchToProps = (dispatch) => ({
  updateProductList: (productList) => dispatch(getProductList(productList))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)

