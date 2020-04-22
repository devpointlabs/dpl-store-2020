import React from 'react';
import { Segment, Grid, Icon, Image } from "semantic-ui-react";
import styled from 'styled-components';
import Logo from '../images/dpl_logo.svg';
import Pin from '../images/Pin.svg';

class Footer extends React.Component {
  state={isMobile: window.innerWidth < 900}
  
  componentDidMount(){
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize = () => {
    this.setState({isMobile: window.innerWidth < 900 })
  }

  render(){
    const {isMobile} = this.state
    return(<div>
      <StyledFooter as={Segment} inverted className="dpl-blue" style={{ marginBottom: '2px', paddingTop: '2%', paddingBottom: '2%',  borderRadius: '30px' }}>
        <div style={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
          <div style={isMobile ? { fontSize: '3vw', marginBottom: '7%' }: { fontSize: '2vw', marginBottom: '7%' }}>Any questions?</div>
          <div style={isMobile ? { fontSize: '5vw', marginBottom: '7%' }: { fontSize: '4vw', fontWeight: 'bold' }}>We're here to help.</div>
  
        </div>
        <div style={isMobile ? { width: '50%' } :{ width: '30%' }}>
          <StyledContact style={isMobile ? {padding:'2%'} : {padding:'5%'}}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '1%', marginRight: '4%' }}>
              <Icon name="mail" style={{ fontSize: '16px' }} />
            </div>
            <div style={isMobile ? { fontSize: '2vw' }: { fontSize: '1.5vw' }}>contact@devpointlabs.com</div>
          </StyledContact>
          <StyledContact style={isMobile ? {padding:'2%'} : {padding:'5%'}}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginRight: '4%' }}>
              <Image src={Pin} size="mini" inline style={{ height: "20px", width: "20px" }} />
            </div>
            <div >
              <div style={isMobile ? { fontSize: '2vw' }: { fontSize: '1.5vw' }}>
                370 South 300 East<br />
              Salt Lake City, Utah<br />
              84111</div>
            </div>
          </StyledContact>
          <StyledContact style={isMobile ? {padding:'2%'} : {padding:'5%'}}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '1%', marginRight: '4%' }}>
              <Icon name="phone" flipped='horizontally' style={{ fontSize: '16px' }} />
            </div>
            <div style={isMobile ? { fontSize: '2vw' }: { fontSize: '1.5vw' }}>801-448-7420</div>
          </StyledContact>
        </div>
      </StyledFooter>
      <div className="dpl-blue" align="right" style={{ padding: '.5%', color: 'white' }}>
        <p style={isMobile ? {fontSize:'2vw'}: {fontSize:'1vw'}}>
          <Image align="left" size={isMobile ? 'tiny' : 'small'} src={Logo} className="filter-white"/>
          <Icon name="copyright outline" fitted inverted size={isMobile ? '14px' : '16px'} /> 2020 DevPoint Labs Terms Policy
          </p>
      </div>
    </div>)
  }
  
}


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
}
`

export default Footer;
