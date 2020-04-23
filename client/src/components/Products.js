import React, { Component } from "react";
import axios from "axios";
import { Card, Image, } from "semantic-ui-react";
import DynamicCategory from "./DynamicCategory";
import BlueHeader from '../images/BlueHeader2.svg';
import FunctionalSearch from './SharedComponents/FunctionalSearch';
import RoundImage from './SharedComponents/RoundImage';
import { Link, } from 'react-router-dom';
import styled from 'styled-components'


export default class Products extends Component {
  state = { categories: [] , results: [] };
  

  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    axios.get("/api/categories").then((res) => {
      this.setState({ categories: res.data });
    });
  };

  renderCategories = () =>
    this.state.categories.map((c) => {
      const category = c.name;
      return (
        <Card.Group key={c.id}>
          <h2 style={{marginBottom:"35px"}}>{category}</h2>
          <br/>
          <DynamicCategory category_id={c.id} category_name={c.name} noHeader />
        </Card.Group>
      );
    });

  afterSearch = (results) => {this.setState({ results: results })};


  renderResults = () => (
    <>
    <h2 style={{marginLeft: "0px"}}>Search Results</h2>
    <div style={style.resultsContainer}>
      {this.state.results.map((result) => (
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
    </>
  );



  render() {
    return (
      <>
        <div className="image-container">
          <Image src={BlueHeader} fluid />
          <HeaderContent className="centered">
            <AllMerch>All Merchandise</AllMerch>
            <Find>Find something you'll love.</Find>
            <FunctionalSearch afterSearch={this.afterSearch}  />
          </HeaderContent>
        </div>
        
        <div style={style.container}>
        {/* <Container style={{margin: '2%'}}> */}
        { this.state.results.length > 0 && this.renderResults() }
        {this.state.categories.length === 0
          ? "No Products"
          : this.renderCategories()}
          </div>
          <br/>
        <br />
      </>
    );
  }
}

const style = {
  button: {
    borderRadius: "30px",
    color: "#4901DB",
    backgroundColor: "rgba(74,1,219, .03)",
    marginBottom: "5%",
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
  `,
}

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const AllMerch = styled.div`{
  font-size: 4vw;
  font-weight:bold; 
  margin-bottom: 40px;
  
  @media(max-width: 900px) {
    font-size: 3vw;
    margin-bottom: 10px;
  }
}
`
const Find = styled.div`{
  font-size: 1.5vw;
  margin-bottom: 30px;
  
  @media(max-width: 900px) {
    font-size: 2vw;
    margin-bottom: 10px;
    }
}
`
 
  

