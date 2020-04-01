import React, { Component } from "react";
import { Header, Table, Button, Icon } from "semantic-ui-react";
// import axios from 'axios'
import AdminPanelForm from "./AdminPanelForm";

export default class AdminPanel extends Component {
  state = {};

  componentDidMount() {
    //axios call here
  }

  deleteProduct = id => {
    // axios.delete(`/api/auth/products/${id}`)
    //      .then(res => console.log(res.data))
    //      .catch(error => console.log(error))
    console.log("delete clicked");
  };

  deleteCategory = category => {
    //sql query then axios call i think
    console.log("category delete picked");
  };

  renderCategories = () =>
    productCategories.map(c => {
      const category = c.name;
      const products = c.products;
      return (
        <>
          <Table key={category} celled striped>
            <Table.Header>
              <Table.HeaderCell colSpan="3">{category}</Table.HeaderCell>
            </Table.Header>
            <Table.Body>
              {products.map(product => {
                return (
                  <Table.Row key={product.name}>
                    <Table.Cell collapsing>{product.name}</Table.Cell>
                    <Table.Cell>{product.description}</Table.Cell>
                    <Table.Cell collapsing textAlign="right">
                      ${product.price}
                    </Table.Cell>
                    <Button onClick={() => this.deleteProduct(product.name)}>
                      <Icon name="trash alternate" />
                    </Button>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </>
      );
    });

  render() {
    return (
      <>
        <Header as="h1" textAlign="center">
          admin panel
        </Header>
        <AdminPanelForm />
        {this.renderCategories()}
      </>
    );
  }
}

const tshirts = [
  {
    name: "t-shirt",
    description: "cool things",
    price: 20
  },
  {
    name: "t-shirt 2",
    description: "cool things",
    price: 25
  },
  {
    name: "t-shirt 3",
    description: "more cool things",
    price: 15
  }
];
const hats = [
  {
    name: "blue hat",
    description: "cool things",
    price: 20
  },
  {
    name: "orange hat",
    description: "cool things",
    price: 25
  },
  {
    name: "purple hat",
    description: "more cool things",
    price: 15
  }
];
const blankets = [
  {
    name: "wool blanket",
    description: "cool things",
    price: 20
  },
  {
    name: "flanel blanket",
    description: "cool things",
    price: 25
  },
  {
    name: "pink blanket",
    description: "more cool things",
    price: 15
  }
];
const stickers = [
  {
    name: "moon",
    description: "cool things",
    price: 20
  },
  {
    name: "sun",
    description: "cool things",
    price: 25
  },
  {
    name: "flask",
    description: "more cool things",
    price: 15
  }
];

const productCategories = [
  { name: "t-shirts", products: tshirts },
  { name: "hats", products: hats },
  { name: "blankets", products: blankets },
  { name: "stickers", products: stickers }
];
