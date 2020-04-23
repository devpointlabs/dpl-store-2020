import React from "react";
import styled from "styled-components";


const RoundImage = ({ src, height, width, media, ...rest }) => {
  return (
    <Container
      height={height}
      width={width}
      src={src}
      media={media}
      {...rest}
    />
  )
}
    
const Container = styled.div`
  height: ${props => props.height};
  width: ${props => props.width};
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  box-shadow: 0px 3px 10px #cccccc;
  ${props => props.media}
`

export default RoundImage;