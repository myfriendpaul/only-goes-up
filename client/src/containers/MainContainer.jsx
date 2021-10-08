import { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Search from "../components/Search";
import Coins from "../components/Coins";
import CoinDetail from "../screens/CoinDetail";
import { getAllCurrencies } from "../services/currencies";
// import Calculate from "../components/Calculate";

export default function MainContainer() {
  const [currencies, setCurrencies] = useState([]);
  const [search, setSearch] = useState([]);
  const [coin, setCoin] = useState(null);
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    const fetchCurrencies = async () => {
      const currencyList = await getAllCurrencies();
      setCurrencies(currencyList);
      console.log(currencyList);
    };
    fetchCurrencies();
  }, []);

  const searchFilterFn = (currency, index) => {
    if (search.length) {
      return currency.name.toUpperCase().includes(search.toUpperCase());
    }
    return index < 10;
  };

  const handleSelect = (e, currencyId) => {
    e.preventDefault();
    console.log(parseInt(currencies.id));
    // console.log(currencies.id);
    // console.log(search);
    const coin = currencies.find((item) => item.id === currencyId);

    setCoin(coin);
    console.log(currencyId);
    console.log(coin);
  };

  // const searchOrCalculate = set active currency state here??  ? <Calculate /> : <Search search={search} setSearch={setSearch} />

  return (
    <div>
      <Switch>
        <Route to="/search" exact>
          <Search search={search} setSearch={setSearch} />
          {/* <Calculate 
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          coin={coin}
          /> */}
        </Route>
        <Route to="/coindetail">
          <CoinDetail />
        </Route>
      </Switch>

      <div className="currencies">
        {currencies.filter(searchFilterFn).map((currency, index) => {
          return (
            // <Link to="/coindetail">
            <Coins
              handleSelect={handleSelect}
              id={currency.id}
              name={currency.name}
              symbol={currency.currency_symbol}
              // imgURL={currency.imgURL}
              // price={currency.price}
              key={currency.id}
            />
            // {/* </Link> */}
          );
        })}
      </div>
    </div>
  );
}
