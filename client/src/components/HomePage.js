import React, { useState } from "react";
import { Image, Card } from "semantic-ui-react";
import { Link } from "react-router-dom";
import BlueHeader from "../images/BlueHeader2.svg";
import FunctionalSearch from "./SharedComponents/FunctionalSearch";
import FeaturedProducts from "./FeaturedProducts";
import RoundImage from './SharedComponents/RoundImage';
import axios from "axios";
import CategoriesLinks from "./CategoriesLinks";
import styled from 'styled-components'

const HomepageLayout = () => {
  const [results, setResults] = useState([]);
  // const [categories, setCategories] = useState([]);

  const afterSearch = results => setResults(results);

  const renderResults = () => (
    <div style={style.searchContainer}>
      <h2 style={{marginLeft: "0px"}}>Search Results</h2>
      <div style={style.resultsContainer}>
        {results.map((result) => (
          <div key={result.id}>
            <Link to={`/categories/${result.category_id}/products/${result.id}`}>
              <RoundImage 
                src={result.main_image}
                height="200px"
                width="200px"
                style={{marginRight: "20px"}}
                media={style.imageMedia}
              />
            </Link>
            <div style={style.informationContainer}>
              <div>
                <Link to={`/categories/${result.category_id}/products/${result.id}`} style={{color: "black"}}>
                  <h4 style={{ margin: "5px", }}>
                    {"$" + result.price + " " + result.title}
                  </h4>
                </Link>
                <br />
              </div> 
            </div>
          </div>
        ))}
      </div> 
    </div>
  );

  return (
    <>
      <div className="image-container">
        <Image src={BlueHeader} />
        {/* <div style={{backgroundSize: "cover", backgroundPosition: "top", backgroundRepeat: "no-repeat", backgroundImage: `url(${BlueHeader})`}} /> */}
        <HeaderContent className="centered">
          <DevPoint>DevPoint Store</DevPoint>
          <Find>Find something you'll love.</Find>
          <FunctionalSearch afterSearch={afterSearch} />
        </HeaderContent>
      </div>

      <div style={style.container}>
        <div style={style.resultsContainer}>
          {results.length > 0 && renderResults()}
        </div>
        <div style={style.categoryLinks}>
          <CategoriesLinks />
        </div>
      </div>
      <div align="center">
        <FeaturedProducts />
      </div>
    </>
  );
};

const style = {
  button: {
    backgroundColor: "#F5F5F5",
    color: "#4901DB",
    borderRadius: "30px",
    padding: "20px",
    align: "center",
    border: "none",
    width: "125px"
  },
  container: {
    margin: "2% 11%",
    align: "center"
  },
  categoryLinks: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "10%",
    marginBottom: "30px",
    float: "left",
    width: "100%"
  },
  resultsContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: 'left',
    marginTop: "2px",
  },
  searchContainer: {
    marginTop: "5px"
  },
  crop: {
    height: "100%",
    overflow: "hidden",
    position: "relative",
  },
  photoHolder: {
    background: "#fff",
    display: "inline-block",
    verticalAlign: "top",
    marginRight: ".5em",
    marginBottom: ".3em",
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0px 3px 10px #cccccc",
  },
  informationContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "5%",
  },
  imageMedia: `
    @media (max-width: 900px) {
      height: 125px;
      width: 125px;
    }
  `
}

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const DevPoint = styled.div`{
  font-size: 4vw;
  font-weight:bold; 
  margin-bottom: 20px;

  @media(max-width: 900px) {
    font-size: 5vw;
    margin-bottom: 10px; 
  }
}
`
const Find = styled.div`{
  font-size: 2vw;
  font-weight: light;
  margin-bottom: 20px; 

  @media(max-width: 900px) {
    font-size: 3vw;
    margin-bottom: 10px;
    }
}
`

export default HomepageLayout;
