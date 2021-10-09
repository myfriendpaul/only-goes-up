import "./Coins.css";
export default function Coins(props) {
  return (
    <div className="currency-list">
      {props.coinData.map((coin) => {
        if (coin.name === props.name) {
          return <img className="logo" src={coin.logo_url} />;
        }
        console.log(typeof coin.id);
        console.log(typeof props.symbol);
      })}
      <span>
        <h1 id="coin-name">{props.name}</h1>
      </span>
      <span>
        <h1 id="coin-symbol">{props.symbol}</h1>
      </span>
      <span>
        {props.coinData.map((andy) => {
          if (andy.currency === props.symbol) {
            return <h3>{andy.price}</h3>;
            // console.log(andy.currency);
          }
        })}
      </span>
      <span>
        <h1 id="coin-supply">{props.max_supply.toLocaleString()}</h1>
      </span>
      <span>{/* <h1>{props.currency.logo_url}</h1> */}</span>
    </div>
  );
}
