import { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Search from "../components/Search";
import Home from "../screens/Home";
import {
  getAllCurrencies,
  getUserCurrencies,
  addCurrencyToUser,
  // getOneCurrency,
  deleteCurrency,
} from "../services/currencies";
import axios from "axios";
import Calculate from "../components/Calculate";
import Portfolio from "../screens/Portfolio";
const URL =
  "https://api.nomics.com/v1/currencies/ticker?key=8d71abdf6b951f83daab569d5bf0f3fa7f0a9b78&per-page=3000";

export default function MainContainer(props) {
  const [currencies, setCurrencies] = useState([]);
  const [search, setSearch] = useState("");
  const [userCurrencies, setUserCurrencies] = useState([]);
  const [coinData, setCoinData] = useState([]);
  const history = useHistory();
  const [value, setValue] = useState();

  const refresh = () => {
    // re-renders the component
    setValue({});
  };

  useEffect(() => {
    const fetchCoinData = async () => {
      const coinDataList = await axios.get(URL);
      setCoinData(coinDataList.data);
      console.log(coinDataList.data);
    };
    fetchCoinData();
  }, []);

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
    history.push("/portfolio");
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
    refresh();
  };

  return (
    <div>
      <Switch>
        <Route path="/search">
          <Search
            currentUser={props.currentUser}
            coinData={coinData}
            currencies={currencies}
            search={search}
            setSearch={setSearch}
            handleSearch={handleSearch}
            searchFilterFn={searchFilterFn}
            handleLogout={props.handleLogout}
          />
        </Route>
        <Route path="/coindetail/:id">
          {/* <CoinDetail /> */}
          <Calculate
            currencies={currencies}
            userCurrencies={userCurrencies}
            handlePortfolioCreate={handlePortfolioCreate}
          />
        </Route>
        <Route path="/portfolio">
          <Portfolio
            coinData={coinData}
            currentUser={props.currentUser}
            handleCurrencyDelete={handleCurrencyDelete}
            handleLogout={props.handleLogout}
          />
        </Route>
        <Route path="/">
          <Home
            handleLogout={props.handleLogout}
            currentUser={props.currentUser}
          />
        </Route>
      </Switch>
    </div>
  );
}
