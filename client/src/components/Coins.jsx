import "./Coins.css";
export default function Coins(props) {
  return (
    <div>
      <li className="currency-list-item" id={props.id}>
        <h1>{props.name}</h1>
        <h1 className="currency-symbol"> {props.symbol}</h1>
      </li>
    </div>
  );
}
