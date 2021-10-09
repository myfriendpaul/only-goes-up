import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { getOneUser, calculateCurrency } from "../services/currencies";
import "./Portfolio.css";

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
        return <h3>{andy.price}</h3>;
      }
    });
  };

  return (
    <div>
      <h1>{user?.username}</h1>

      {user?.users_currencies.map((coin) => {
        return (
          <div className="coin-list">
            <span>{getJimmy(coin.currency.currency_symbol)}</span>
            <span>
              <h3>{coin.currency.name}</h3>
            </span>
            <span>
              <h3>{coin.currency.currency_symbol}</h3>
            </span>
            <span>{getJimmyPrice(coin.currency.currency_symbol)}</span>
            <span className="quantity">
              <h3>{coin.quantity}</h3>
              <Link to={`/coindetail/${coin.currency_id}`}>
                <button className="edit-btn">Edit</button>
              </Link>
            </span>
            <button
              className="delete-btn"
              onClick={() => {
                props.handleCurrencyDelete(coin.currency_id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

// if (jimmy.currency === props.symbol) {
//   return <img src={jimmy.logo_url} />;
// }
