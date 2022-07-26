import React from 'react'
import SkeletonView from '../SkeletonView';
import Image from '../elements/Image';

function ImageItem(props) {
  const LazyImage = React.lazy(()=>import('./LazyImage'));

  return (
    <div style={{marginBottom:"10px"}}>
      <React.Suspense fallback={<SkeletonView/>}> 
        <LazyImage src={props.src} name={props.name} ></LazyImage>
        <hr></hr>
      </React.Suspense>    
    </div>
  )
}

export default ImageItem
