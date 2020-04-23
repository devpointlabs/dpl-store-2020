import React from "react";
import styled from "styled-components";
import { Container } from "semantic-ui-react";

const ProductCard = ({ height, width, media, imageGroup, title, description, price, }) => {
  return(
    <Container
      height={height}
      width={width}
      media={media}
      >
        <Grid>
          <div align="center">
            <Grid.Column maxWidth="50%" kvb computer={2} mobile={2}>
              {imageGroup}
            </Grid.Column>
          </div>
          <Grid.Column width={7}>
            <Grid.Row style={style.productGridRight}>
              <h1>title</h1>
            </Grid.Row>
            <Grid.Row style={style.productGridRight}>
              <h4>{description}</h4>
            </Grid.Row>
            <Grid.Row style={style.productGridRight}>
              <h1>{"$" + price}</h1>
            </Grid.Row>

            {/* <div>
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
              </Grid.Row>*/}
          </Grid.Column>
        </Grid>
    </Container>
  )
};



const Container = styled.div`
height: ${props => props.height};
width: ${props => props.width};
${props => props.media}
`


export default ProductCard;