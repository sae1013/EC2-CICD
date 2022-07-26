import React from 'react';

function Number({data}) {
  return (
    <div className="App">
      <div>
        {data.map((ele,idx)=>{
        <p key = {idx}>{ele}</p>
      })}
	  </div>
    </div>
  );
}

export default Number;
