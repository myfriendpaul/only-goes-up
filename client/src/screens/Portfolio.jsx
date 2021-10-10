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
      <div className="portfolio-container">
        <h1 className="portfolio-name">
          {user?.username}'s <br />
          Moon Bucket
        </h1>
        {user?.users_currencies.map((coin) => {
          return (
            <div className="coin-list">
              <span className="coin-logo">
                {getJimmy(coin.currency.currency_symbol)}
              </span>
              <span>
                <p className="coin-name">{coin.currency.name}</p>
              </span>
              <span>
                <p className="coin-symbol">{coin.currency.currency_symbol}</p>
              </span>
              <span className="coin-price">
                {getJimmyPrice(coin.currency.currency_symbol)}
              </span>
              <div className="test">
                <span className="coin-quantity">
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
            </div>
          );
        })}
      </div>
    </div>
  );
}

// if (jimmy.currency === props.symbol) {
//   return <img src={jimmy.logo_url} />;
// }
