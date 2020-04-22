import React, { useState } from "react";
import { Image, Card } from "semantic-ui-react";
import { Link } from "react-router-dom";
import BlueHeader from "../images/BlueHeader2.svg";
import FunctionalSearch from "./SharedComponents/FunctionalSearch";
import FeaturedProducts from "./FeaturedProducts";
import axios from "axios";
import CategoriesLinks from "./CategoriesLinks";

const HomepageLayout = () => {
  const [results, setResults] = useState([]);
  // const [categories, setCategories] = useState([]);

  const afterSearch = (results) => setResults(results);

  const renderResults = () => (
    <div style={style.searchContainer}>
      <h2>Search Results</h2>
      <div style={style.resultsContainer}>
        {results.map((result) => (
          <div key={result.id}>
            <Image
              src={result.main_image}
              alt={result.title}
              size="small"
              as={Link}
              to={`/categories/${result.category_id}/products/${result.id}`}
            />
            <Card.Header>{result.title}</Card.Header>
            <Card.Meta>${result.price}</Card.Meta>
            <br />
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
        {/* <div style={{backgroundSize: "cover", backgroundPosition: "top", backgroundRepeat: "no-repeat", backgroundImage: `url(${BlueHeader})`}} /> */}
        <div className="flex flex-col items-center justify-center dpl-blue" style={{
          padding: "1.5rem 0"
        }}>
          <h1 className="large-header">DevPoint Store</h1>
          <h3 className="small-header">Find something you'll love.</h3>
          <FunctionalSearch afterSearch={afterSearch} />
        </div>
        {/* <Image
          style={{
            position: "relative",
            width: "100%",
            top: 0,
            left: 0,
            right: 0,
            zIndex: -1,
          }}
          src={BlueHeader}
        /> */}
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
    width: "125px",
  },
  container: {
    margin: "2% 11%",
    marginTop: "5%",
    align: "center",
  },
  categoryLinks: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "10%",
    marginBottom: "15%",
    float: "left",
    width: "100%",
  },
  resultsContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "2%",
    margin: "5%",
  },
  searchContainer: {
    marginTop: "5%",
  },
};

export default HomepageLayout;
