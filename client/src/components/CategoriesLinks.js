import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Image, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Featured from "../images/blank.png";

const CategoriesLinks = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/categories`)
      .then(res => {
        setCategories(res.data);
      })
      .catch(console.log);
  }, []);

  return (
    <>
     <Header as="h3" className="heading">
        CATEGORIES
      </Header>
    <Grid style={styles.Grid} computer={4} mobile={2}>
     
        {categories.map(category => (
          <Grid.Column
            centered
            as={Link}
            to={`/categories/${category.id}/products`}
            style={styles.GridItem}
            computer={4}
            mobile={8}
          >
            <Image
              src={category.image}
              alt={category.name}
              style={styles.image}
            />
            <div style={styles.Text}>
              {category.name}
            </div>
          </Grid.Column>
        ))}
    </Grid>
    </>
  ); 
};

const styles = {
  image: {
    borderRadius: "25px",
    width: "100%",
    height: "100%"
  },
  Grid: {
    width: "100%",
    height: "100%",
  },
  GridItem:{
    // padding:"40px",
    width: "25%",
    height: "20%",
    marginTop:"25px",
    paddingTop: "30px"
  },
  Text:{
    paddingTop: "15%",
    // textAlign: "left",
    color: "Black",
    fontSize: "20px",
    textAlign: "center"
  }
};

export default CategoriesLinks;
