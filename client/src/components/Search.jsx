import Coins from "./Coins";
import { Link } from "react-router-dom";
import "./Search.css";
import Layout from "../layouts/Layout";

export default function Search(props) {
  return (
    <div className="input-container">
      <Layout
        currentUser={props.currentUser}
        handleLogout={props.handleLogout}
      />
      <div className="form-group">
        <label></label>
        <p className="page-header">Search Cryptocurrencies</p>
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
              <Link
                style={{ textDecoration: "none" }}
                to={`/coindetail/${currency.id}`}
              >
                <Coins
                  id={currency.id}
                  name={currency.name}
                  symbol={currency.currency_symbol}
                  coinData={props.coinData}
                  max_supply={currency.max_supply}
                  // imgURL={currency.imgURL}
                  // price={currency.price}
                  key={currency.id}
                  handleLogout={props.handleLogout}
                  currentUser={props.currentUser}
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
}
