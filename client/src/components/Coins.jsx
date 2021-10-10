import "./Coins.css";

export default function Coins(props) {
  return (
    // <div className="currency-list">
    <div className="coin-list">
      <span>
        {props.coinData.map((coin) => {
          if (coin.name === props.name) {
            return (
              <span>
                {" "}
                <img className="coin-logo1" src={coin.logo_url} />
              </span>
            );
          }
        })}
      </span>
      <span>
        <p className="coin-name">{props.name}</p>
      </span>
      <span>
        <p className="coin-symbol">{props.symbol}</p>
      </span>
      <span>
        {props.coinData.map((andy) => {
          if (andy.currency === props.symbol) {
            return (
              <p className="coin-price">{`$${Number(andy.price).toFixed(
                2
              )}`}</p>
            );
          }
        })}
      </span>
      <span>
        <p className="coin-supply">{props.max_supply.toLocaleString()}</p>
      </span>
    </div>
  );
}
