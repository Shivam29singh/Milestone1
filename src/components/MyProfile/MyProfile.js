import React, { Component } from "react";
import logo from "../../assest/logo.jpg";
// import downlaod from "../../assest/downlaod.png";
import images from "../../assest/images.jpg";
import pic from "../../assest/pic.jpg";
import pic1 from "../../assest/pic1.jpg";
class MyProfile extends Component {
  state = {};
  render() {
    return (
      <div>
        <form inline>
          {/* <img
            src={logo}
            alt="logo"
            style={{ height: "500px", width: "400px" }}
          /> */}
          <br></br>
          <img
            src={pic1}
            alt="images"
            style={{ height: "300", width: "300px" }}
          />

          <img src={pic} alt="pic" />
        </form>
      </div>
    );
  }
}

export default MyProfile;
