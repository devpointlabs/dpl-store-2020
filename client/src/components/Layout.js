import React, { Component, useState } from "react";
import { Icon, Image, Menu, Button, Sidebar } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Beaker from "../images/logo_black.svg";
import Links from "./Links";
import styled from "styled-components";
import Cart from './Cart'

const Layout = ({ children }) => {
  const [visible, setVisible] = useState(false);

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
          <Image as='center' src={Beaker} size="tiny" className="filter-white"></Image>
        </Menu.Item>
        <Links />
        
      </Sidebar>
      <Sidebar.Pusher>
        <HamburgerContainer>
          <Hamburger onClick={() => setVisible(true)}>
            <Icon name="sidebar" size="large"/>
          </Hamburger>
        </HamburgerContainer>
        <div>{children}</div>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

const HamburgerContainer = styled.div`
  display: none !important;
  background-color: #4901db;
  width: 100%;

  @media (max-width: 767px) {
    display: inline-block !important;
  }
`;

const Hamburger = styled(Button)`
  background-color: #4901db !important;
`;

export default Layout;
