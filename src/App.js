import React from "react";
import Signup from "./components/signup/signup";
import Login from "./components/login/login";

import Home from "./Container/Home/Home";

import { BrowserRouter, Route } from "react-router-dom";
import AddProduct from "./components/Products/AddProduct/addproduct";
// import EditProduct from "./components/editProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/register" component={Signup} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/AddProduct" component={AddProduct} />
        {/* <Route exact path="/EditProduct" component={EditProduct} /> */}

        <Route exact path="/" component={Login} />
      </BrowserRouter>
    </div>
  );
}

export default App;
