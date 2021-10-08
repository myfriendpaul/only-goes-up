import { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Search from "../components/Search";
import Coins from "../components/Coins";
import CoinDetail from "../screens/CoinDetail";
import { getAllCurrencies } from "../services/currencies";
import axios from "axios";
// import api from "../services/api";
import Calculate from "../components/Calculate";

export default function MainContainer() {
  const [currencies, setCurrencies] = useState([]);
  const [search, setSearch] = useState([]);
  const [coin, setCoin] = useState(null);
  const [amount, setAmount] = useState("");

  // useEffect(() => {
  //   const fetchCurrencies = async () => {
  //     const currencyList = await getAllCurrencies();
  //     setCurrencies(currencyList);
  //     console.log(currencyList);
  //   };
  //   fetchCurrencies();
  // }, []);

  // const searchFilterFn = (currency, index) => {
  //   if (search.length) {
  //     return currency.name.toUpperCase().includes(search.toUpperCase());
  //   }
  //   return index < 10;
  // };

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
  const handleSubmit = (e) => {
    e.preventDefault();
    let currency = coin;
    let amount = amount;
    axios.post("http://localhost:3000/calculate", {
      id: currency.id,
      amount: amount,
    });
  };

  return (
    <div>
      {/* <Switch> */}
      <Route path="/search">
        <Search
          coin={coin}
          search={search}
          setSearch={setSearch}
          // handleSelect={handleSelect}
          // searchFilterFn={searchFilterFn}
        />
      </Route>
      <Calculate
        handleSubmit={handleSubmit}
        coin={coin}
        amount={amount}
        setAmount={setAmount}
      />
      {/* </Switch> */}
    </div>
  );
}

{
  /* <Route to="/coindetail/:id">
          <CoinDetail />
        </Route> */
}
{
  /* </Switch> */
}
{
  /* <div className="currencies">
        {currencies.filter(searchFilterFn).map((currency, index) => {
          return (
            <Link to="/coindetail">
            <Coins
              handleSelect={handleSelect}
              id={currency.id}
              name={currency.name}
              symbol={currency.currency_symbol}
              imgURL={currency.imgURL}
              price={currency.price}
              key={currency.id}
            />
            // </Link>
          );
        })}
      </div> */
}
