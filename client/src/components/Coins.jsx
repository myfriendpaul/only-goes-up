import "./Coins.css";
export default function Coins(props) {
  return (
    <div className="currency-list">
      <span>
        <h1 id="coin-name">{props.name}</h1>
      </span>
      <span>
        <h1 id="coin-symbol">{props.symbol}</h1>
      </span>
      <span>
        <h1 id="coin-supply">{props.max_supply.toLocaleString()}</h1>
      </span>
      <span>{/* <h1>{props.currency.logo_url}</h1> */}</span>
    </div>
  );
}
