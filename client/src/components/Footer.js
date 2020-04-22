import React from 'react';
import { Segment, Grid, Icon, Image } from "semantic-ui-react";
import styled from 'styled-components';
import Logo from '../images/dpl_logo.svg';
import Pin from '../images/Pin.svg';
import { Link } from 'react-router-dom'

const Footer = () => (
    <div>
      <StyledFooter as={Segment} inverted className="dpl-blue" style={{ marginBottom: '2px', paddingTop: '2%', paddingBottom: '2%',  borderRadius: '30px' }}>
        <div style={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
          <Questions>Any questions?</Questions>
          <WereHere>We're here to help.</WereHere>
  
        </div>
        <ContactHolder>
          <StyledContact >
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '1%', marginRight: '4%' }}>
              <Icon name="mail" style={{ fontSize: '16px' }} />
            </div>
            <ContactText>contact@devpointlabs.com</ContactText>
          </StyledContact>
          <StyledContact >
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginRight: '4%' }}>
              <Image src={Pin} size="mini" inline style={{ height: "20px", width: "20px" }} />
            </div>
            <div >
              <ContactText>
                370 South 300 East<br />
              Salt Lake City, Utah<br />
              84111</ContactText>
            </div>
          </StyledContact>
          <StyledContact >
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '1%', marginRight: '4%' }}>
              <Icon name="phone" flipped='horizontally' style={{ fontSize: '16px' }} />
            </div>
            <ContactText>801-448-7420</ContactText>
          </StyledContact>
        </ContactHolder>
      </StyledFooter>
      <div className="dpl-blue" align="right" style={{ padding: '.5%', color: 'white' }}>
        <p style={window.innerWidth < 900 ? {fontSize:'2vw'}: {fontSize:'1vw'}}>
          <Image align="left" size={window.innerWidth < 900 ? 'tiny' : 'small'} src={Logo} className="filter-white"/>
          <Icon name="copyright outline" fitted inverted size={window.innerWidth < 900 ? '14px' : '16px'} /> 2020 DevPoint Labs <Link to='/terms' style={{color: "white"}}>Terms</Link> <Link to='/policy' style={{color: "white"}}>Policy</Link>
          </p>
      </div>
    </div>
  
)

const WereHere = styled.div`{
  font-size: 4vw;
    font-weight:bold; 
  @media(max-width: 900px) {
    font-size: 5vw;
    margin-bottom: '7%' 
    }
}
`

const Questions = styled.div`{
  font-size: 2vw;
    margin-bottom: 7%; 
  @media(max-width: 900px) {
    font-size: 3vw;
    margin-bottom: 7%
    }
}
`

const StyledP = styled.p`{
  font-size: 1vw;
  @media(max-width: 900px) {
    font-size: 2vw
    }
}
`
const ContactHolder = styled.div`{
  width: 30%;
  @media(max-width: 900px) {
    width: 50%
    }
}
`

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
  margin: 2%;
  display:flex;

  @media(max-width: 900px) {
    padding: 2%
    }
}
`
const ContactText = styled.div `{
  font-size: 1.5vw;
  @media(max-width: 900px) {
    font-size: 2vw
    }
}`

export default Footer;
