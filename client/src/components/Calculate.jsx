// import axios from "axios";
import api from "../services/config";

export default function Calculate(props) {
  // const resp = await api.post("/calculate");
  // return resp.data;
  const handleSubmit = () => {};
  const handleAmount = (e) => {
    props.setAmount(e.target.value);
  };
  return (
    <div>
      <h1>How much {props.coin} do you own?</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Enter quantity owned</label>
          <input
            onChange={handleAmount}
            autoComplete="off"
            type="text"
            name="name"
            placeholder="How much do you own?"
            value={props.amount}
            className="search-field"
          ></input>
        </div>
        <div className="calculate-btn">
          <button>Calculate</button>
        </div>
      </form>
    </div>
  );
}
