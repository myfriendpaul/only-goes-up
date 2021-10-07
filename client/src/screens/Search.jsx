export default function Search(props) {
  return (
    <div>
      <h1>Search Cryptocurrencies</h1>
      <form>
        <div className="form-group">
          <lable>Search for a currency:</lable>
          <input
            autocomplete="off"
            type="text"
            name="name"
            placeholder="Ex: Bitcoin, Ethereum, Litecoin..."
            value=""
            className="search-field"
          ></input>
        </div>
      </form>
    </div>
  );
}
