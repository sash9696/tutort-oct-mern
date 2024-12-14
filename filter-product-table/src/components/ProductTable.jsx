import React from "react";

import {ProductCategoryRow, ProductRow} from '../components';

function ProductTable({ products, filterText, isStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
        console.log('return')
      return;
    }

    if(isStockOnly && !product.stocked){
        return;
    }

    if(product.category !== lastCategory){
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
    }

    rows.push(<ProductRow product={product} key={product.name} />);

    lastCategory= product.category;
  });

  //   console.log("ProductTable", {
  //     rows,
  //     products,
  //     filterText,
  //     isStockOnly,
  //   });


  //try out using filter and map



  return (
    <table>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Product Price</th>
        </tr>
      </thead>

      <tbody>{rows}</tbody>
    </table>
  );
}

export default ProductTable;
