import React from 'react'
import styled from 'styled-components';

function Image({src,...styleProps}) {
  
  return (
    <ImgContainer {...styleProps}> 
      <Img {...styleProps}src = {src}/>
    </ImgContainer>
  )
}
const ImgContainer = styled.div`
  width: ${({width}) =>width ? width:'100%'};
  height: ${({height}) => height ? height: 'auto'};
  overflow:hidden;
`;

const Img = styled.img`
  width: 100%;
  border-radius: ${({borderRadius}) => borderRadius ? borderRadius : '0'};
  object-fit: cover;

`;
export default Image
