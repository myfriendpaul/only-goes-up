import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Search from "../components/Search";
import Coins from "../components/Coins";
// import Calculate from "../components/Calculate";
import { getAllCurrencies } from "../services/currencies";

export default function MainContainer() {
  const [currencies, setCurrencies] = useState([]);
  const [search, setSearch] = useState("");
  // const [currencyData, setCurrencyData] = useState({
  //   name: "",
  //   portfolio: [],
  //   search_results: [],
  //   active_currency: null,
  //   quantity: "",
  // });

  useEffect(() => {
    const fetchCurrencies = async () => {
      const currencyList = await getAllCurrencies();
      setCurrencies(currencyList);
      console.log(setCurrencies);
    };
    fetchCurrencies();
  }, []);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setSearch((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  //   searchCurrencies();
  // };

  const searchFilterFn = (currency, index) => {
    if (search.length) {
      return currency.name.toUpperCase().includes(search.toUpperCase());
    }
    return index < 10;
  };

  const handleSubmit = (e) => e.preventDefault();
  return (
    <div>
      <Route to="/search">
        <Search search={search} setSearch={setSearch} />
        {/* <Calculate /> */}
      </Route>
      <div className="currencies">
        {currencies.filter(searchFilterFn).map((currency, index) => {
          return (
            <Coins
              id={currency.id}
              name={currency.name}
              // imgURL={currency.imgURL}
              // price={currency.price}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
