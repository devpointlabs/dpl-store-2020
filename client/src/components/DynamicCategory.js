import React, { useState, useEffect } from "react";
import { Image, Grid, } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";
import BlueHeader from "../images/BlueHeader2.svg";
import FunctionalSearch from "./SharedComponents/FunctionalSearch";
import Products from "./Products";
import Arrow from "../images/LineArrowDown.svg";
import styled from 'styled-components';
import RoundImage from "./SharedComponents/RoundImage";


const DynamicCategory = ({ category_id, match, category_name, noHeader }) => {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState(null);
  const [results, setResults] = useState([]);
  const [sortType, setSortType] = useState('')
  const cat_id = category_id || match.params.category_id;

  // gets products on initial render
  useEffect(() => {
    axios
      .get(`/api/categories/${cat_id}/products`)
      .then(res => sortItems(res.data, sortType))
      .catch(console.log);
  }, [sortType, cat_id]);

  // gets category on initial render
  useEffect(() => {
    axios
      .get(`/api/categories/${cat_id}`)
      .then((res) => setCategory(res.data))
      .catch(console.log);
  }, [cat_id]);


  // clears results when category changes
  useEffect(() => {
    setResults([]);
  }, [cat_id]);

  const renderResults = () => (
    <>
    <h2>Search Results</h2>
    <div style={style.resultsContainer}>
    {results.map((result) => (
        <div key={result.id} style={{marginRight: "20px"}}  >
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
            </div>
          </div> 
        </div>
    ))}
    </div>
    </>
  );



  const renderItems = () => (
    <Grid style={style.productContainer} computer={3} mobile={2}>
      {items.map((product) => (
        <Grid.Column key={product.id} style={style.product} computer={5} mobile={7}>
          <Link to={`/categories/${cat_id}/products/${product.id}`}>
            <PhotoHolder>
              <div style={style.crop}>
                <Image style={style.photo} src={`${product.main_image}`} />
              </div>
            </PhotoHolder>
          </Link>

          <div style={style.informationContainer}>
            <div>
              <Link to={`/categories/${cat_id}/products/${product.id}`}>
                <h4 style={{ margin: "5px", display: "inline", color: "black", }}>
                  {"$" + product.price}
                </h4>
                <h4 style={{ margin: "5px", display: "inline", color: "black" }}>
                  {product.title}
                </h4>
              </Link>
            </div>
          </div>
        </Grid.Column>
      ))
      }
    </Grid >
  );

  const sortItems = (items, type) => {
    let sorted = [];
    if (type === 'highPrice') {
      sorted = items.sort((a, b) => a.price > b.price ? -1 : 1);
    } else if (type === 'lowPrice') {
      sorted = items.sort((a, b) => a.price > b.price ? 1 : -1);
    } else {
      sorted = items;
    };
    setItems(sorted);
  };

  if (noHeader) {
    return <>{renderItems()}</>;
  } else {
    return (
      <>
        <div className="image-container">
          <Image src={BlueHeader} style={{ width: "100%" }} />
          <HeaderContent className="centered">
            <CatName>{category && category.name}</CatName>
            <FunctionalSearch afterSearch={setResults} category_id={cat_id} />
            <Price >Price</Price>
            <select style={style.sort} onChange={ (e) => setSortType(e.target.value) }>
              <option value='default' defaultValue > Sort by </option>
              <option value='highPrice'>Highest</option>
              <option value='lowPrice'>Lowest</option>
            </select>
            <Image src={Arrow} style={style.arrow} className= "filter-white"></Image>
          </HeaderContent>
        </div>

        <div style={style.container}>

          {results.length > 0 && renderResults()}

          {renderItems()}
        </div>
        <br />
      </>
    );
  };
};

const style = {
  photo: {
    display: "block",
    minWidth: "100%",
    minHeight: "100%",
    margin: " auto",
    position: "absolute",
    top: "-100%",
    right: "-100%",
    bottom: "-100%",
    left: "-100%"
  },
  crop: {
    height: "100%",
    overflow: "hidden",
    position: "relative"
  },
  informationContainer: {
    justifyContent: "space-between",
    marginTop: "5%",
  },
  item: {
    width: "30%",
    margin: "1%",
  },
  button: {
    borderRadius: "30px",
    color: "#4901DB",
    backgroundColor: "rgba(74,1,219, .03)",
  },
  productContainer: {
    width: '100%',
    height: "100%",
    justifyContent:"left",
    marginBottom: "70px",
  },
  container: {
    margin: "2% 11%",
    marginTop: "5%"
  },
  resultsContainer: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "5%",
    marginBottom: "5%",
    justifyContent: "flex-start",
  },
  sort: {
    backgroundColor: "#4901DB",
    boxShadow: "-2px -2px 10px rgba(255,255,255,0.2), 2px 2px 10px rgba(0,0,0,0.2)",
    width: "80px",
    height: "40px",
    color: "white",
    textDecoration: "none",
    webkitAppearance: "none",
    mozAppearance: "none",
    border: "none",
    padding: "10px",
    borderRadius: "15px",
  },
  arrow: {
    width: "12px",
    position: "absolute",
    display: "inline-block",
    left: "63px",
    top: "150px",
  },
  option: {
    backgroundColor: "white",
  },
  product: {
    // display: "block",
    width: "25%",
    height: "25%",
    // margin: "50px",
    // padding: "5px",
  },
  imageMedia: `
    @media (max-width: 900px) {
      height: 125px;
      width: 125px;
    }
  `
}

const PhotoHolder = styled.div`
  background: #fff;
  vertical-align: top;
  width: 100%;
  margin-right: .5em;
  margin-bottom: .3em;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0px 3px 10px #cccccc;
  height:250px;
  @media(max-width: 600px) {
    background: #fff;
    vertical-align: top;
    width: 100%;
    margin-right: .5em;
    margin-bottom: .3em;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0px 3px 10px #cccccc;
    height:150px;
  }
  @media(min-width: 1500px) {
    background: #fff;
    vertical-align: top;
    width: 100%;
    margin-right: .5em;
    margin-bottom: .3em;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0px 3px 10px #cccccc;
    height:400px;
  }
`
const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const CatName = styled.div`
  font-size: 4vw;
  font-weight:bold; 
  margin-bottom: 30px;

  @media(max-width: 900px) {
    font-size: 3vw;
    margin-bottom: 20px;
  }
`
const Sort = styled.div`
  background-color: transparent;
  box-shadow: -2px -2px 10px rgba(255,255,255,0.2), 2px 2px 10px rgba(0,0,0,0.2)";
  width: 80px;
  height: 40px;
  color: white;
  webkit-appearance: none;
  moz-appearance: none;
  border: none;
  filter: brightness(0.9);
  padding: 10px;
  border-radius: 15px;
  margin-top: 5%;

  @media(max-width: 900px) {
    width: 40px;
    height: 20px;
    padding: 5px;
  }
`
const Price = styled.div`
  font-size: 16px;
  margin-top: 20px;
  margin-bottom: 15px;
  
  @media(max-width: 900px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`

export default DynamicCategory;
