import { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Search from "../components/Search";
import CoinDetail from "../screens/CoinDetail";
import {
  getAllCurrencies,
  getUserCurrencies,
  addCurrencyToUser,
  // getOneCurrency,
  deleteCurrency,
} from "../services/currencies";
import Calculate from "../components/Calculate";
import Portfolio from "../screens/Portfolio";

export default function MainContainer(props) {
  const [currencies, setCurrencies] = useState([]);
  const [search, setSearch] = useState("");
  const [userCurrencies, setUserCurrencies] = useState([]);
  const history = useHistory();
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
    // history.push("/");
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

  const handleCurrencyDelete = async (id) => {
    await deleteCurrency(id);
    setCurrencies((prevState) => prevState.filter((coin) => coin.id !== id));
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
      <Route path="/users/:id">
        <Portfolio
          currentUser={props.currentUser}
          handleCurrencyDelete={handleCurrencyDelete}
        />
      </Route>
      {/* </Switch> */}
    </div>
  );
}
