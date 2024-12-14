import React, { useState } from "react";
import {SearchBar,ProductTable} from '../components';

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState("");

  const [isStockOnly, setIsStockOnly] = useState(false);

  return (
    <div>
      {/* search bar */}

      <SearchBar
        filterText={filterText}
        isStockOnly={isStockOnly}
        onFilterTextChange={setFilterText}
        onIsStockOnlyChange={setIsStockOnly}
      />

      {/* products table */}

      <ProductTable
        products={products}
        filterText={filterText}
        isStockOnly={isStockOnly}
      />
    </div>
  );
}

export default FilterableProductTable;
