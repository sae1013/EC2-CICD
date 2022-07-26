import React from "react";

function ImageItemTest({ src, name }) {
  return (
    <div>
      <div> 아이템 제목입니다.</div>
      <img src={src}></img>
    </div>
  );
}

export default ImageItemTest;
