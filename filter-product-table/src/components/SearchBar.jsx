import React, { useState } from "react";

function SearchBar({
  filterText,
  isStockOnly,
  onFilterTextChange,
  onIsStockOnlyChange,
}) {
  return (
    <form>
      <input
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <br />

      <label>
        <input
          type="checkbox"
          checked={isStockOnly}
          onChange={(e) => onIsStockOnlyChange(e.target.checked)}
        />
        Only show stocked options
      </label>
    </form>
  );
}

export default SearchBar;
