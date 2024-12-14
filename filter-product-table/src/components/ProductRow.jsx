import React from "react";

function ProductRow({ product }) {
  console.log("product", { product });

  // const name = product.stocked ? product.name :
  //     <span style={{color:'red'}} >{product.name}</span>

  //   const name = (
  //     <span style={product.stocked ? {} : { color: "red" }}>{product.name}</span>
  //   );

  const name = (
    <span style={{ color: product.stocked ? "" : "red" }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

export default ProductRow;
