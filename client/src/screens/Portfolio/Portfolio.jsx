import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { getOneUser } from "../../services/currencies";
import "./Portfolio.css";
import { Icon } from "@iconify/react";
import Layout from "../../layouts/Layout";

export default function Portfolio(props) {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getOneUser(id);
      setUser(userData);
    };
    if (props.currentUser) fetchUser();
  }, [id, props.currentUser]);

  const getCoinSymbol = (symbol) => {
    return props.coinData.map((andy) => {
      if (andy.currency === symbol) {
        return <img className="coin-logo1" src={andy.logo_url} />;
      }
    });
  };
  const getCoinPrice = (symbol) => {
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
              <span>{getCoinSymbol(coin.currency.currency_symbol)}</span>
              <span>
                <p className="coin-name">{coin.currency.name}</p>
              </span>
              <span>
                <p className="coin-symbol">{coin.currency.currency_symbol}</p>
              </span>
              <span className="coin-price">
                {getCoinPrice(coin.currency.currency_symbol)}
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
