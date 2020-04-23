import React, { useState, useEffect, } from 'react';
import axios from 'axios';
import { Menu, } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';


const Links = () => {
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
        <Menu.Item key={`${category.id}`} as={Link} to={{pathname:`/categories/${category.id}/products`,}}>{category.name}</Menu.Item>
    ));

  return(
    <>
      <Menu.Item as={Link} to={{pathname:"/allmerchandise"}}>All Products</Menu.Item>
      {renderLinks()}
    </>
  )
};

export default Links;