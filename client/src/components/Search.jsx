// import { useState } from "react";
export default function Search(props) {
  // const [search, setSearch] = useState("");
  // const handleChange = (e) => {
  //   debugger;
  // };
  return (
    <div>
      <h1>Search Cryptocurrencies</h1>
      <form>
        <div className="form-group">
          <label>Search for a currency:</label>
          <input
            onChange={(e) => {
              props.handleChange(e);
            }}
            autoComplete="off"
            type="text"
            name="name"
            placeholder="Ex: Bitcoin, Ethereum, Litecoin..."
            value={props.name}
            className="search-field"
          ></input>
        </div>
      </form>
    </div>
  );
}
