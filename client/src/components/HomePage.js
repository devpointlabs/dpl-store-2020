import React, { useState } from "react";
import { Image, Card } from "semantic-ui-react";
import { Link } from "react-router-dom";
import BlueHeader from "../images/BlueHeader2.svg";
import FunctionalSearch from "./SharedComponents/FunctionalSearch";
import FeaturedProducts from "./FeaturedProducts";
import axios from "axios";
import CategoriesLinks from "./CategoriesLinks";
import styled from 'styled-components'

const HomepageLayout = () => {
  const [results, setResults] = useState([]);
  // const [categories, setCategories] = useState([]);

  const afterSearch = results => setResults(results);

  const renderResults = () => (
    <div style={style.searchContainer}>
    <h2 >Search Results</h2>
    <div style={style.resultsContainer}>
    {results.map((result) => (
      <div key={result.id}>
       <div style={{ ...style.photoHolder }}>
            <div style={style.crop}>
          <Link to={`/categories/${result.category_id}/products/${result.id}`}>
            <Image src={result.main_image} alt={result.title} size="small"/>
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
          <br />
        </div> 
       </div>
       </div>
    ))}
  </div> 
  </div>
  );

  // useEffect( () => {
  //   axios.get('/api/categories')
  //     .then( res => {
  //       setCategories(res.data)
  //       console.log(res.data)
  //       const categoriesArray = [res.data];
  //       console.log(categories)
  //       console.log(categoriesArray)
  //     })
  //     .catch(console.log)
  // }, [])

  return (
    <>
      <div className="image-container">
        <Image src={BlueHeader} />
        {/* <div style={{backgroundSize: "cover", backgroundPosition: "top", backgroundRepeat: "no-repeat", backgroundImage: `url(${BlueHeader})`}} /> */}
        <HeaderContent className="centered">
          <DevPoint>DevPoint Store</DevPoint>
          <br/>
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
          <br />
          <br />
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
    marginBottom: "15%",
    float: "left",
    width: "100%"
  },
  resultsContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: 'left',
    marginTop: "2%",
    margin: "5%"
  },
  searchContainer: {
    marginTop: "5%"
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
}

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const DevPoint = styled.div`{
  font-size: 4vw;
  font-weight:bold; 
  margin-bottom: 15px;

  @media(max-width: 900px) {
    font-size: 5vw;
    margin-bottom: 10px; 
  }
}
`
const Find = styled.div`{
  font-size: 2vw;
  font-weight: light;
  margin-bottom: 15px; 

  @media(max-width: 900px) {
    font-size: 3vw;
    margin-bottom: 5%
    }
}
`

export default HomepageLayout;
