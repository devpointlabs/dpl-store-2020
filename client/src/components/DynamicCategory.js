import React, { useState, useEffect } from "react";
import { Image, Grid, Card } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";
import BlueHeader from "../images/BlueHeader2.svg";
import FunctionalSearch from "./SharedComponents/FunctionalSearch";
import Products from "./Products";
import Arrow from "../images/LineArrowDown.svg";
import styled from 'styled-components';

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
      .then(res => {
        setItems(res.data)
        sortItems(sortType)
      })
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
  },[cat_id]);

  const renderResults = () => (
    <>
    <h2 style={{marginLeft: "120px"}}>Search Results</h2>
    <div style={style.resultsContainer}>
    {results.map((result) => (
        <div key={result.id} >
           <div style={{ ...style.photoHolder }}>
            <div style={style.crop}>
            <Link to={`/categories/${result.category_id}/products/${result.id}`}>
              <Image src={result.main_image} alt={result.title} size="small" />
              </Link>
              </div>
              </div>
        <div style={style.informationContainer}>
        <div>
            <Link to={`/categories/${result.category_id}/products/${result.id}`} style={{color: "black"}}>
            <h4 style={{ margin: "5px", }}>
                  {"$" + result.price}
                </h4>
                <h5 style={{ margin: "5px",  }}>
                  {result.title}
                </h5>
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
            <div style={style.photoHolder}>
              <div style={style.crop}>
                <Image style={style.photo} src={`${product.main_image}`} />
              </div>
            </div>
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

  const sortItems = type => {
    if (type == 'highPrice') {
      const sorted = [...items].sort((a, b) => a.price > b.price ? -1 : 1);
      setItems(sorted);
    } else if (type == 'lowPrice') {
      const sorted = [...items].sort((a, b) => a.price > b.price ? 1 : -1);
      setItems(sorted);
    } else {
      const sorted = [...items].sort((a, b) => {
        a = new Date(a.created_at);
        b = new Date(b.created_at);
        return a > b ? 1 : -1;
      });
    };
  };

  if (noHeader) {
    return <>{renderItems()}</>;
  } else {
    return (
      <>
        <div className="image-container">
          <Image src={BlueHeader} style={{ width: "100%" }} />
          <div className="centered">
            <h1 className="large-header">{category && category.name}</h1>
            <FunctionalSearch afterSearch={setResults} category_id={cat_id} />
            <h4 style={{marginLeft: "-350px"}}>Price</h4>
            <select style={style.sort} onChange={ (e) => setSortType(e.target.value) }>
              <option value='default' defaultValue > Sort by </option>
              <option value='highPrice'>Highest to Lowest</option>
              <option value='lowPrice'>Lowest to Highest</option>
            </select>
            <Image src={Arrow} style={style.arrow} className= "filter-white"></Image>
          </div>
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
    width:"100%",
    height:"100%",
  },
  crop: {
    height: "100%",
    overflow: "hidden",
    position: "relative"
  },
  photoHolder: {
    background: "#fff",
    verticalAlign: "top",
    width: "100%",
    marginRight: ".5em",
    marginBottom: ".3em",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0px 3px 10px #cccccc"
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
    marginLeft: "2.5%",
  },
  container: {
    margin: "2% 11%",
    marginTop: "5%"
  },
  resultsContainer: {
    display: "flex",
    flexWrap: "wrap",
    marginLeft: "120px",
    marginTop: "5%",
    marginBottom: "5%",
    justifyContent: "flex-start",
  },
  sort: {
    backgroundColor: "#4901DB",
    width: "80px",
    height: "40px",
    color: "white",
    textDecoration: "none",
    webkitAppearance: "none",
    mozAppearance: "none",
    marginLeft: "-265px",
    border: "none",
    filter: "brightness(0.9)",
    padding: "10px",
    borderRadius: "15px",
  },
  arrow: {
    width: "12px",
    position: "absolute",
    display: "inline-block",
    left: "93px",
    top: "205px",
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
  }
}

const Truncated = styled.div `
  width: 120px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default DynamicCategory;
