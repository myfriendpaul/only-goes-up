import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { getOneUser, calculateCurrency } from "../services/currencies";
import "./Portfolio.css";
import { Icon } from "@iconify/react";
import Layout from "../layouts/Layout";

export default function Portfolio(props) {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getOneUser(id);
      setUser(userData);
    };
    if (props.currentUser) fetchUser();
  }, [id, props.currentUser]);

  const getJimmy = (symbol) => {
    return props.coinData.map((andy) => {
      if (andy.currency === symbol) {
        return <img className="logo" src={andy.logo_url} />;
        console.log(andy.currency);
      }
    });
  };
  const getJimmyPrice = (symbol) => {
    return props.coinData.map((andy) => {
      if (andy.currency === symbol) {
        return <p>{`$${Number(andy.price).toFixed(2)}`}</p>;
      }
    });
  };

  return (
    <div>
      <Layout
        currentUser={props.currentUser}
        handleLogout={props.handleLogout}
      />
      <h1 className="portfolio-name">{user?.username}'s Moon Bucket</h1>

      {user?.users_currencies.map((coin) => {
        return (
          <div className="coin-list">
            <span>{getJimmy(coin.currency.currency_symbol)}</span>
            <span>
              <p className="coin-name">{coin.currency.name}</p>
            </span>
            <span>
              <p>{coin.currency.currency_symbol}</p>
            </span>
            <span>{getJimmyPrice(coin.currency.currency_symbol)}</span>
            <span className="quantity">
              <p>
                QTY: {coin.quantity}{" "}
                <Link to={`/coindetail/${coin.currency_id}`}>
                  <Icon
                    className="edit-btn"
                    icon="clarity:edit-line"
                    color="#8BCCD8"
                  />
                </Link>
              </p>
            </span>
            {/* <span className="edit-btn">
                <Icon icon="clarity:edit-line" color="#d04a5b" />
              </span> */}
            <a
              href="#"
              className="delete-btn"
              onClick={() => {
                props.handleCurrencyDelete(coin.currency_id);
              }}
            >
              <Icon icon="teenyicons:x-circle-outline" color="#d04a5b" />
            </a>
          </div>
        );
      })}
    </div>
  );
}

// if (jimmy.currency === props.symbol) {
//   return <img src={jimmy.logo_url} />;
// }
