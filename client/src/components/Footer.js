import React from 'react';
import { Segment, Grid, Icon, Image } from "semantic-ui-react";
import styled from 'styled-components';
import Logo from '../images/dpl_logo.svg';
import Pin from '../images/Pin.svg';

const Footer = () => (
  <div>
    <StyledFooter as={Segment} inverted className="dpl-blue" style={{ marginBottom: '2px', paddingTop: '4%', paddingBottom: '3%',  borderRadius: '30px' }}>
      <div style={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
        <div style={{ fontSize: '2vw', marginBottom: '7%' }}>Any questions?</div>
        <div style={{ fontSize: '4vw', fontWeight: 'bold' }}>We're here to help.</div>

      </div>
      <div style={{ width: '30%' }}>
        <StyledContact>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '1%', marginRight: '4%' }}>
            <Icon name="mail" style={{ fontSize: '16px' }} />
          </div>
          <div style={{ fontSize: '1.5vw' }}>contact@devpointlabs.com</div>
        </StyledContact>
        <StyledContact>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginRight: '4%' }}>
            <Image src={Pin} size="mini" inline style={{ height: "20px", width: "20px" }} />
          </div>
          <div >
            <div style={{ fontSize: '1.5vw' }}>
              370 South 300 East<br />
            Salt Lake City, Utah<br />
            84111</div>
          </div>
        </StyledContact>
        <StyledContact>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '1%', marginRight: '4%' }}>
            <Icon name="phone" flipped='horizontally' style={{ fontSize: '16px' }} />
          </div>
          <div style={{ fontSize: '1.5vw' }}>801-448-7420</div>
        </StyledContact>
      </div>
    </StyledFooter>
    <div className="dpl-blue" align="right" style={{ padding: '.5%', color: 'white' }}>
      <p><Image align="left" size="small" src={Logo} className="filter-white"></Image>2020 DevPoint Labs Terms Policy</p>
    </div>
  </div>
)


const StyledFooter = styled.div` {
  position: relative;
  z-index: 1;
  background-color: 6E54A3;
  display: flex;
  justify-content: space-around;
  
  &:before,
  &:after {
    background: inherit;
    content: '';
    display: block;
    height: 75%;
    left: 0;
    position: absolute;
    right: 0;
    z-index: -1;
    border-top-right-radius: 25px;
  }

  &:before {
    top: 0;
    transform: skewY(-1deg);
    transform-origin: 0% 0;
  }
  
  &:after {
    bottom: 0;
    transform: skewY(0deg);
    transform-origin: 100%;
  }
}
`;

const StyledContact = styled.div` {
  background-color: white;
  padding: 5%;
  color:black;
  border-radius: 10px;
  font-size: 1vw;
  margin: 3%;
  display:flex;
}
`

export default Footer;
