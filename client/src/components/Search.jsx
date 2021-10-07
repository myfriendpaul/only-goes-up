import { useState } from "react";
// import { searchCurrencies } from "../services/currencies";

export default function Search(props) {
  const handleSearch = (e) => {
    props.setSearch(e.target.value);
  };
  return (
    <div>
      <h1>Search Cryptocurrencies</h1>

      <div className="form-group">
        <label>Search for a currency:</label>
        <input
          onChange={handleSearch}
          autoComplete="off"
          type="text"
          name="name"
          placeholder="Ex: Bitcoin, Ethereum, Litecoin..."
          value={props.search}
          className="search-field"
        ></input>
      </div>
    </div>
  );
}
