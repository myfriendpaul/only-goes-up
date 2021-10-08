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

  return (
    <div>
      <h1>{user?.username}</h1>
      {user?.users_currencies.map((coin) => {
        return (
          <div className="coin-list">
            <span>
              <h3>{coin.currency.name}</h3>
            </span>
            <span>
              <h3>{coin.currency.currency_symbol}</h3>
            </span>
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
      {/* <h1>{user?.users_currencies}</h1> */}
      {/* <h1>{props.currentUser.users_currencies[0].currency}</h1> */}
    </div>
  );
}
