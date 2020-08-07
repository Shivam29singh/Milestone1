// import React, { Component } from "react";
// import "./Product.css";
// import GridList from "@material-ui/core/GridList";
// import GridListTile from "@material-ui/core/GridListTile";
// import GridListTileBar from "@material-ui/core/GridListTileBar";
// import ListSubheader from "@material-ui/core/ListSubheader";

// import IconButton from "@material-ui/core/IconButton";
// import axios from "axios";
// import { Button } from "@material-ui/core";
// import { Container } from "react-bootstrap";
// class product extends Component {
//   state = {
//     persons: [],
//   };

//   componentDidMount() {
//     axios.get("  http://localhost:3000/produclist").then((res) => {
//       const persons = res.data;
//       this.setState({ persons });
//     });
//   }
//   render() {
//     return (
//       <Container>
//         <div className={"root"}>
//           <GridList cellHeight={180} className={"gridList"}>
//             <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
//               <ListSubheader component="div">
//                 Addresses
//                 <span style={{ marginLeft: "70%" }}>
//                   <Button variant="contained">Add Address</Button>
//                 </span>
//               </ListSubheader>
//             </GridListTile>
//             {this.state.persons.map((person) => (
//               <GridListTile key={person.id}>
//                 <img
//                   style={{ width: "70%", height: "70%" }}
//                   src={person.img}
//                   alt={person.title}
//                 />
//                 <GridListTileBar
//                   title={person.value}
//                   subtitle={<span>city: {person.price}</span>}
//                   actionIcon={
//                     <IconButton
//                       aria-label={`info about ${person.value}`}
//                       className={"icon"}
//                     ></IconButton>
//                   }
//                 />
//               </GridListTile>
//             ))}
//           </GridList>
//         </div>
//       </Container>
//     );
//   }
// }

// export default product;

import React, { Component } from "react";

class Product extends Component {
  deleteCurrentProduct = () => {
    console.log("delete product with id: " + this.props.id);

    this.props.deleteId(this.props.id);
  };

  editProductWithId = () => {
    console.log("edit product with id: " + this.props.id);

    this.props.editId(this.props.id);
  };
  render() {
    return (
      <div
        className="item"
        style={{
          width: "300px",
          height: "180px",
          float: "left",
          margin: "20px 5px 10px 150px",
          backgroundColor: "#fef7ff",
        }}
      >
        <div
          className="card"
          style={{ width: "300px", height: "180px", border: "1px solid black" }}
        >
          <div className="image" style={{ float: "left", margin: "5px" }}>
            <img
              src={this.props.image}
              style={{ width: "100px", height: "160px" }}
              alt="pic"
            />
          </div>
          <div
            className="description"
            style={{
              width: "auto",
              height: "auto",
              marginLeft: "80px",
              paddingLeft: "2px",
            }}
          >
            <div style={{ width: "40%", height: "50%", padding: "2px" }}>
              {this.props.name}
            </div>

            <div style={{ width: "40%", height: "50%", color: "red" }}>
              {this.props.price}
            </div>
          </div>
          <br />
          <button onClick={this.editProductWithId}>Edit</button>
          &nbsp;
          <button onClick={this.deleteCurrentProduct}>Delete</button>
        </div>
      </div>
    );
  }
}
export default Product;
