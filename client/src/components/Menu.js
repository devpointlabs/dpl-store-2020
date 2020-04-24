import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Container, Icon, Image, Menu, Responsive, Sidebar, Visibility, } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import Beaker from "../images/logo_black.svg";
import Links from './Links';
import { getAllCartItems } from '../modules/CartFunctions'
import { CartConsumer, } from "../providers/CartProvider";



const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}




const HomepageHeading = ({ mobile }) => (
  <Container text >


  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

class DesktopContainer extends Component {
  state = {cartNumber:0}
  

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const {auth:{getCart}} = this.props
    const { children } = this.props
    const { fixed, cartNumber} = this.state


    return (
      <Responsive
        getWidth={getWidth}
        minWidth={Responsive.onlyTablet.minWidth}
      >
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
            <Menu className="dpl-blue"
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              inverted
              size='large'
              style={{margin: 0, border: "none"}}
            >
              <Container fluid >
              <Link to="/" >
                <Menu.Item>
                  <Image src={Beaker} size="tiny" className="filter-white"></Image>
                </Menu.Item></Link>
              <Menu.Item position='right'>
                <Links />
                <Link to="/cart">
                  <Menu.Item>
                    <Icon name="shopping cart" />Cart {getCart().length > 0 ?
                      <div style={{ 
                        color: '#4901DB', 
                        backgroundColor: 'white', 
                        borderRadius: '50%', 
                        padding: '4px', 
                        marginLeft: '6px',
                        width:'21px',
                        height:'21px',
                        textAlign:'center' }}>
                        {getCart().length}
                      </div> : <></>}
                  </Menu.Item>
                </Link>
              </Menu.Item>
            </Container>
          </Menu>
          <HomepageHeading />
        </Visibility>

        {children}
      </Responsive >
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

//

const ResponsiveContainer = ({ children, auth}) => (
  <div>
    <DesktopContainer auth={auth}>{children}</DesktopContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = ({auth}) => (
  <ResponsiveContainer auth={auth} >

  </ResponsiveContainer >
);

export class ConnectedHomepageLayout extends React.Component {
  render() {
    return (
      <CartConsumer> 
        { auth => 
          <HomepageLayout { ...this.props } auth={auth} />
        }
      </CartConsumer>
    )
  }
}



export default ConnectedHomepageLayout;