import React, { useState } from "react";
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
        className="dpl-blue"
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        onHide={() => setVisible(false)}
        vertical
        visible={visible}
        width="thin"
      >
        <Hamburger onClick={() => setVisible(false)}>
          <Icon name="close" inverted style={{position: "absolute",right: "10px",}} />
        </Hamburger>
        <Menu.Item as={Link} to="/">
          <Image as='center' src={Beaker} size="tiny" className="filter-white"></Image>
        </Menu.Item>
        <Links />
        <Link to="/cart">
          <Menu.Item style={{ padding: "10px" }}>
            <Icon name="shopping cart" />
          </Menu.Item>
        </Link>
      </Sidebar>
      <Sidebar.Pusher>
        <HamburgerContainer>
          <Hamburger onClick={() => setVisible(true)}>
            <Icon name="sidebar" inverted size="large" />
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

const CloseBtn = styled(Button)`
  position: absolute;
  top: 0;
`

export default Layout;
