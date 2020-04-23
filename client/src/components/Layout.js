import PropTypes from "prop-types";
import React, { Component, useState } from "react";
import {
  Container,
  Icon,
  Image,
  Menu,
  Button,
  Responsive,
  Sidebar,
  Visibility,
  Segment,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import Beaker from "../images/logo_black.svg";
import Links from "./Links";
import { getAllCartItems } from "../modules/CartFunctions";
import { CartConsumer } from "../providers/CartProvider";

const Layout = ({ children }) => {
  const [visible, setVisible] = useState(true);

  return (
    <Sidebar.Pushable as="div">
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        onHide={() => setVisible(false)}
        vertical
        visible={visible}
        width="thin"
      >
        <Menu.Item as={Link} to="/">
          <Image src={Beaker} size="tiny" className="filter-white"></Image>
        </Menu.Item>
        <Links />
      </Sidebar>
      <Sidebar.Pusher>
        <Button onClick={()=>setVisible(true)}>
          <Icon name="sidebar" />
        </Button>
        <div>{children}</div>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

export default Layout;


