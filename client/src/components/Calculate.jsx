import axios from "axios";
// import api from "services/api";
import { useState } from "react";

export default function Calculate(props) {
  const handleAmout = () => {};

  return (
    <div>
      <h1>How much {props.coin} do you own?</h1>
      <form onSubmit={props.handleSubmit}>
        <div className="form-group">
          <label>Enter quantity owned</label>
          <input
            onChange={props.handleAmount}
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
