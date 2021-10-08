import { useState, useEffect } from "react";
import { getAllCurrencies } from "../services/currencies";
import Coins from "./Coins";
import { Link } from "react-router-dom";
// import { searchCurrencies } from "../services/currencies";

export default function Search(props) {
  const [currencies, setCurrencies] = useState([]);
  const [coin, setCoin] = useState(null);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    const fetchCurrencies = async () => {
      const currencyList = await getAllCurrencies();
      setCurrencies(currencyList);
      console.log(currencyList);
    };
    fetchCurrencies();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // const handleSelect = (e, currencyId) => {
  //   e.preventDefault();
  //   console.log(parseInt(currencies.id));
  //   // console.log(currencies.id);
  //   // console.log(search);
  //   const coin = currencies.find((item) => item.id === currencyId);

  //   setCoin(coin);
  //   console.log(currencyId);
  //   console.log(coin);
  // };
  const searchFilterFn = (currency, index) => {
    if (search.length) {
      return currency.name.toUpperCase().includes(search.toUpperCase());
    }
    return index < 10;
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
      //////////////////////////////////////////
      <div className="currencies">
        {currencies.filter(searchFilterFn).map((currency, index) => {
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
