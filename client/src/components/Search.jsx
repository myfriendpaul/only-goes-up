import { useState, useEffect } from "react";
import { getAllCurrencies } from "../services/currencies";
import Coins from "./Coins";
import { Link } from "react-router-dom";
// import { searchCurrencies } from "../services/currencies";

export default function Search(props) {
  // const [currencies, setCurrencies] = useState([]);
  // const [coin, setCoin] = useState(null);
  // const [search, setSearch] = useState([]);

  // useEffect(() => {
  //   const fetchCurrencies = async () => {
  //     const currencyList = await getAllCurrencies();
  //     setCurrencies(currencyList);
  //     console.log(currencyList);
  //   };
  //   fetchCurrencies();
  // }, []);

  const handleSearch = (e) => {
    props.setSearch(e.target.value);
  };

  const searchFilterFn = (currency, index) => {
    if (props.search.length) {
      return currency.name.toUpperCase().includes(props.search.toUpperCase());
    }
    return index < 10;
  };

  return (
    <div>
      <h1>Search Cryptocurrencies</h1>
      <div className="form-group">
        <label>Search for a currency:</label>
        <input
          onChange={props.handleSearch}
          autoComplete="off"
          type="text"
          name="name"
          placeholder="Ex: Bitcoin, Ethereum, Litecoin..."
          value={props.search}
          className="search-field"
        ></input>
      </div>

      <div className="currencies">
        {props.currencies
          .filter(props.searchFilterFn)
          .map((currency, index) => {
            return (
              <Link to={`/coindetail/${currency.id}`}>
                <Coins
                  // handleSelect={handleSelect}
                  id={currency.id}
                  name={currency.name}
                  symbol={currency.currency_symbol}
                  // imgURL={currency.imgURL}
                  // price={currency.price}
                  key={currency.id}
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
}
