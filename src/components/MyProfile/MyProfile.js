import React, { Component } from "react";
import logo from "../../assest/logo.jpg";
class MyProfile extends Component {
  state = {};
  render() {
    return (
      <div>
        <img src={logo} alt="logo" className="brand_logo" />
      </div>
    );
  }
}

export default MyProfile;
