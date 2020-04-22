import React, { useState } from "react";
import axios from "axios";
import { Image, Sidebar, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

import Links from "./Links";
import Beaker from "../images/logo_black.svg";

const Layout = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Sidebar.Pushable as={Segment}>
      <Sidebar
        inverted
        className="dpl-blue"
        onHide={() => setOpen(false)}
        vertical
        visible={isOpen}
      >
        {/* Implement mobile navigation */}
        {/* <DevPointLogo /> */}
        <Links />
      </Sidebar>
      <Sidebar.Pusher>
        <div>
          <header className="dpl-blue flex items-center justify-between">
            <button onClick={() => setOpen(true)}>Click</button>
            <div className="hide-me-small">
              <Links />
            </div>
          </header>
          {/*  Have a button that shows up on small screens onclick set open */}
          {/*  Show normal menu here */}
          {children}
        </div>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

export default Layout;
