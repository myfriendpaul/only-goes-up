import "./Coins.css";
export default function Coins(props) {
  return (
    <div className="currency-list">
      <li className="currency-list-item" id={props.id}>
        <div className="currency-items">
          <div>
            <h1 id="coin-name">{props.name}</h1>
          </div>
          <div>
            <h1 id="coin-symbol">{props.symbol}</h1>
          </div>
          <div>
            <h1 id="coin-supply">{props.max_supply.toLocaleString()}</h1>
          </div>
        </div>
        {/* <div className="currency-item-symbol">
          <h1 id="coin-symbol">{props.symbol}</h1>
        </div> */}
      </li>
    </div>
  );
}
