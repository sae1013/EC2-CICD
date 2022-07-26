import React from "react";
import { images } from "../../dummy/image";
import ImageItem from "./ImageItem";

function ImageList() {
  const LazyItem = React.lazy(() => import("./ImageItemTest"));
  return (
    <div>      
        {images.map((image) => (
          <React.Suspense fallback={<p>skeleton Loading............</p>}>
            <LazyItem key={image.id} {...image}></LazyItem>
          </React.Suspense>
        ))}
    </div>
  );
}

export default ImageList;
