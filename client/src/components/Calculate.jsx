import React from "react";

export default function Calculate() {
  return (
    <div>
      <h1>How much x do you own?</h1>
      <form onSubmit={props.handleSubmit}>
        <div className="form-group">
          <label>Enter quantity owned</label>
          <input
            onChange={handleChange}
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
