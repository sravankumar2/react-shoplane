import { BrowserRouter, Switch, Route, } from 'react-router-dom';
import React, { useEffect } from 'react';
import './App.css';
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
    getProductsData();  

  },[])

  return (
    <div className="App">
      <BrowserRouter>
        <Topbar/>  
          
        <Switch>       
             
          <Route path="/react-shoplane" exact><Home/></Route>
          <Route path="/checkout" exact component={Checkout}/>
          <Route path="/PlaceOrder" exact component={PlaceOrder}/>         
          <Route path="/product/:id" component={ProductDetails}/>
          <Route path="*"><h1 style={{ padding: "100px 50px" }}>Error 404 Page</h1></Route>
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

