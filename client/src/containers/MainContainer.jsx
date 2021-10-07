import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Search from "../components/Search";
// import Calculate from "../components/Calculate";
import { getAllCurrencies } from "../services/currencies";

export default function MainContainer() {
  const [currencies, setCurrencies] = useState([]);
  const [search, setSearch] = useState("");
  const [currencyData, setCurrencyData] = useState({
    name: "",
    portfolio: [],
    search_results: [],
    active_currency: null,
    quantity: "",
  });

  useEffect(() => {
    const fetchCurrencies = async () => {
      const currencyList = await getAllCurrencies;
      setCurrencies(currencyList);
      console.log(setCurrencies);
    };
    fetchCurrencies();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearch((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <Route to="/search">
        <Search handleChange={handleChange} />
        {/* <Calculate /> */}
      </Route>
    </div>
  );
}
