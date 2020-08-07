import React, { Component } from "react";
import { CardColumns, Card, Container } from "react-bootstrap";
import axios from "axios";
import { Redirect } from "react-router";
class Product extends Component {
  state = {
    deleteSuccess: false,
    myid: 0,
  };
  deleteId = (id) => {
    console.log("delete friend for received id: " + id);
    axios.delete("http://localhost:3000/productlist/" + id).then(
      (response) => {
        this.setState({ deleteSuccess: true });
      },
      (error) => {
        console.error(error);
      }
    );
  };

  deleteCurrentProduct = () => {
    console.log("delete product with id: " + this.props.id);

    this.deleteId(this.props.id);
  };

  editProductWithId = () => {
    console.log("edit product with id: " + this.props.id);

    this.props.editId(this.props.id);
  };
  render() {
    if (this.state.deleteSuccess) {
      return <Redirect to="/Home" />;
    }
    if (this.state.myid) {
      return (
        <Redirect
          to={{
            pathname: "/validate",
            state: {
              id: this.state.myid,
            },
          }}
        />
      );
    }
    return (
      <Container>
        <CardColumns>
          <Card>
            <Card.Img variant="top" src={this.props.image} />
            <Card.Body>
              <Card.Title>{this.props.name}</Card.Title>
              <Card.Text>
                {this.props.price}
                <button onClick={this.editProductWithId}>Edit</button>
                &nbsp;
                <button onClick={this.deleteCurrentProduct}>Delete</button>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardColumns>
      </Container>
    );
  }
}
export default Product;
