import React from 'react'
import Image from '../elements/Image';

function LazyImage({src,name}) {
  return (
    <Image src = {src} alt={name} width="300px" height="300px"></Image>
  )
}

export default LazyImage
