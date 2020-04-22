import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Grid, Image, Header, } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';
import Featured from '../images/blank.png'

const CategoriesLinks = () => {
  const [categories, setCategories] = useState([]);

  useEffect( () => {
    axios
    .get(`/api/categories`)
    .then( (res) => {
      setCategories(res.data)
    })
    .catch(console.log);
  }, []);
  
  const renderLinks = () =>
    categories.map( (category) => (
      <div key={`${category.id}`}>
        <Grid.Column as={Link} to={`/categories/${category.id}/products`} style={{ color: 'black' }}>
          <Image src={category.image} alt={category.name} style={styles.image}/>
          <h4 align="center" style={{ color: 'black' }}>{category.name}</h4>
        </Grid.Column>
      </div>
    ))

  return(
    <Grid>
      <Header as="h3" className="heading">CATEGORIES</Header>
      <div style={styles.container}>
        {renderLinks()}
      </div>
    </Grid>
  )
};

const styles = {
  image: {
  borderRadius: "25px",
  width: "270px",
  height: "200px",
  margin: '5px',
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "2%"
  },
}

export default CategoriesLinks;