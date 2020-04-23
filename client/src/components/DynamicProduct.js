import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Grid, Button, Image, Container, Item } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Arrow from "../images/LineArrowDown.svg";
import { CartConsumer } from "../providers/CartProvider";
import styled from "styled-components";


const DynamicProduct = ({
  category_id,
  product_id,
  match,
  auth: { addItemToCart }
}) => {
  const [product, setProduct] = useState({});
  const [size, setSize] = useState("");
  const [showImage, setShowImage] = useState("");
  const [images, setImages] = useState([]);
  const [items, setItems] = useState([]);

  // gets product on initial render
  useEffect(() => {
    const cat_id = match.params.category_id;
    const prod_id = match.params.id;
    axios
      .get(`/api/categories/${cat_id}/products/${prod_id}`)
      .then(res => {
        setProduct(res.data);
        setShowImage(res.data.main_image);
        sizeSelectorOptions(res.data);
      })
      .catch(console.log);
  }, []);

  // gets images on initial render
  useEffect(() => {
    axios
      .get(`/api/products/${match.params.id}/images`)
      .then(res => setImages(res.data))
      .catch(e => console.log(e));
  }, []);

  //generate sizes for one product
  const sizeSelectorOptions = product => {
    const sizes = Object.entries(product.sizes).map(size => {
      return {label: `${size[0]}`, value:`${size[0]}`}
    })
    setItems(sizes)
  };

  const imageGroup = () => {
    console.log(showImage)
    return (
      <>
        <div style={style.roundedImage(showImage)}/>
        <Image.Group style={style.imageGroup} >
          <Image
            src={product.main_image}
            style={style.altImage}
            onClick={() => pickShowImage(product.main_image)}
            onMouseEnter={() => pickShowImage(product.main_image)}

          />
          {images.slice(0, 3).map(image => {
            if (image.url === null) {
              //return nothing
            } else {
              return (
                <>
                  <Image
                    style={style.altImage}
                    src={image.url}
                    onClick={() => pickShowImage(image.url)}
                    onMouseEnter={() => pickShowImage(image.url)}
                  />
                </>
              );
            }
          })}
        </Image.Group>
      </>
    );
  };

  const pickShowImage = imageURL => {
    setShowImage(imageURL);
  };

  return (
    <>
      <div style={style.headerContainer}>
        <Link to={`/categories/${match.params.category_id}/products/`}>
          <Button style={style.headerButton}>Go Back</Button>
        </Link>
      </div>

      <Container>
        <CustomCard key={product.id}>
          <Card.Header>
            <Grid stackable columns={2}>
              <div align="center">
                <Grid.Column maxWidth="50%" kvb>
                  {imageGroup()}
                </Grid.Column>
              </div>
              <Grid.Column align="left">
                <Grid.Row style={style.productGridRight}>
                  <h1>{product.title}</h1>
                </Grid.Row>
                <Grid.Row style={style.productGridRight}>
                  <h4>{product.description}</h4>
                </Grid.Row>
                <Grid.Row style={style.productGridRight}>
                  <h1>{"$" + product.price}</h1>
                </Grid.Row>

                <div>
                  <p>Size</p>
                  <select
                    style={style.dropdown}
                    onChange={e => setSize(e.currentTarget.value)}
                  >
                    {items.map(({ label, value }) => (
                      <option key={value} value={value}>
                        {label === "noSize" ? "none" : label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <br />
                  <Grid.Row>
                    <Button
                      as={Link}
                      to="/cart"
                      style={style.button}
                      content="Add to Cart"
                      onClick={() => addItemToCart(product, size)}
                    />
                  </Grid.Row>
                </div>
              </Grid.Column>
            </Grid>
          </Card.Header>
        </CustomCard>
      </Container>


      {/* <Container>
        <Item.Group key={product.id} style={style.card}>
          <Item>
            <Item.Image>
              <div align="center">
                <Grid.Column maxWidth="50%" kvb>
                  {imageGroup()}
                </Grid.Column>
              </div>
            </Item.Image>

            <Item.Content>
              <Item.Header>
                <h1>{product.title}</h1>
              </Item.Header>
              <Item.Description>
                <h4>{product.description}</h4>
              </Item.Description>
              <Item.Meta>
                {"$" + product.price}
              </Item.Meta>
              <Item.Extra>
                <div>
                  <p>Size</p>
                  <select
                    style={style.dropdown}
                    onChange={e => setSize(e.currentTarget.value)}
                  >
                    {items.map(({ label, value }) => (
                      <option key={value} value={value}>
                        {label === "noSize" ? "none" : label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <Grid.Row>
                    <Button
                      as={Link}
                      to="/cart"
                      style={style.button}
                      content="Add to Cart"
                      onClick={() => addItemToCart(product, size)}
                    />
                  </Grid.Row>
                </div>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Container> */}
    </>
  );
};

export class ConnectedDynamicProduct extends React.Component {
  render() {
    return (
      <CartConsumer>
        {auth => <DynamicProduct {...this.props} auth={auth} />}
      </CartConsumer>
    );
  }
}

const CustomCard = styled.div`
  height: 600px;
  width: 1100px;
  border-radius: 12px;
  margin-bottom: 20%;
  margin-top: -100px;
  background-color: white;
  border: 0.5px solid #D3D3D3;
  @media only screen and (max-width: 1024px) {
    height: 1200px;
    width: 400px;
  };
  @media only screen and (max-width: 411px) {
    height: 1200px;
    width: 400px;
  }
`;


const style = {
  button: {
    color: "white",
    backgroundColor: "#4901DB",
    borderRadius: "30px",
    padding: "20px",
    width: "460px"
  },
  productGridRight: {
    marginTop: "60px",
    marginBottom: "30px",
  },
  headerContainer: {
    backgroundColor: "#4901DB",
    color: "white",
    padding: "20px 100px",
    height: "200px",
    display: "flex",
    justifyContent: "space-between"
  },
  headerButton: {
    backgroundColor: "rgba(0,0,0, 0.13)",
    fontSize: "12px",
    color: "rgba(255,255,255, 0.7)",
    width: "100px"
  },
  imageGroup: {
    marginLeft: "40px",
    display: "flex",
    alignItems: "flex-start",
  },
  roundedImage: function(src) {
    return {
      borderRadius: "5px",
      width: "300px",
      height: "400px",
      margin: "40px",
      marginTop: "50px",
      backgroundImage: `url(${src})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }
  },
  altImage: {
    borderRadius: "5px",
    height: "75px",
    width: "75px",
  },
  // card: {
  //   height: "600px",
  //   width: "1100px",
  //   borderRadius: "12px",
  //   marginBottom: "20%",
  //   marginTop: "-100px"
  // },
  rounded: {
    borderRadius: "25px",
    padding: "40px"
  },
  dropdown: {
    width: "50%",
    height: "40px",
    backgroundColor: "#FFFFFF",
    borderColor: "lightgrey",
    textDecoration: "none",
    webkitAppearance: "none",
    mozAppearance: "none",
    textIndent: "1px",
    textOverflow: "",
    paddingLeft: "10px",
  },
};

export default ConnectedDynamicProduct;