import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Search from "../components/Search";
import CoinDetail from "../screens/CoinDetail";
import {
  getAllCurrencies,
  getUserCurrencies,
  addCurrencyToUser,
} from "../services/currencies";
import Calculate from "../components/Calculate";
import Portfolio from "../screens/Portfolio";

export default function MainContainer() {
  const [currencies, setCurrencies] = useState([]);
  const [search, setSearch] = useState("");
  const [userCurrencies, setUserCurrencies] = useState([]);

  useEffect(() => {
    const fetchCurrencies = async () => {
      const currencyList = await getAllCurrencies();
      setCurrencies(currencyList);
      console.log(currencyList);
    };
    fetchCurrencies();
  }, []);

  useEffect(() => {
    const fetchUserCurrencies = async () => {
      const portfolioCurrencies = await getUserCurrencies();
      setUserCurrencies([portfolioCurrencies]);
    };
    fetchUserCurrencies();
  }, []);

  const handlePortfolioCreate = async (id, currencyData) => {
    const portfolioData = await addCurrencyToUser(id, currencyData);
    setUserCurrencies(portfolioData);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const searchFilterFn = (currency, index) => {
    if (search.length) {
      return currency.name.toUpperCase().includes(search.toUpperCase());
    }
    return index < 10;
  };

  return (
    <div>
      {/* <Switch> */}
      <Route path="/search">
        <Search
          currencies={currencies}
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
          searchFilterFn={searchFilterFn}
        />
      </Route>
      <Route path="/coindetail/:id">
        {/* <CoinDetail /> */}
        <Calculate
          userCurrencies={userCurrencies}
          handlePortfolioCreate={handlePortfolioCreate}
        />
      </Route>
      <Route>
        <Portfolio userCurrencies={userCurrencies} />
      </Route>
      {/* </Switch> */}
    </div>
  );
}
