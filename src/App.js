import React,{useState} from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import HomePage from './Components/HomePage/HomePage'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./Components/Login/Login";
import {Product_page_mens_new} from './Components/Products/Product_page'
import {Product_page_womens_new} from './Components/Products/Product_page'
import Product_page_men from './Components/Products/Product_page_men'
import Product_page_women from './Components/Products/Product_page_women'
import {useStateValue} from "./Components/Reducer/StateProvider";
import Checkout from "./Components/Checkout/Checkout";
import All_product from "./Components/Products/All_product";


function App() {
  // this
  const [search,setSearch] = useState('')
  const [] = useStateValue();

  return (
   
    <Router>
    <div className="App">
    <Switch>
    <Route path="/login">
      <Login></Login>
     </Route>
     <Route path="/checkout">
      <Header></Header>
      <Checkout></Checkout>
    </Route>
    
    <Route  path="/search">
   
    <Header setSearch={setSearch}></Header>
      <All_product search={search}></All_product>
     </Route>
    <Route path="/womens">
     <Header></Header>
      <Product_page_women></Product_page_women>
     </Route>
    <Route path="/mens">
     <Header></Header>
      <Product_page_men></Product_page_men>
     </Route>
     <Route path="/mens-new">
     <Header></Header>
      <Product_page_mens_new></Product_page_mens_new>
     </Route>
     <Route path="/womens-new">
     <Header></Header>
      <Product_page_womens_new></Product_page_womens_new>
     </Route>
      <Route path="/">
      <Header></Header>
      <HomePage></HomePage>
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
