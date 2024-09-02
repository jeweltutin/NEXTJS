import React from 'react'

export default function ProductDetails({ params }) {
  const { details } = params;
  //console.log(params);
  //console.log(details);
  console.log(params.details);
  return (
    <div>
      This is Product Details page
      <h4>Params value is: {details}</h4>
    </div>
  )
}
