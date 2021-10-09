import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Layout from "../layouts/Layout";

export default function Calculate(props) {
  const params = useParams();
  const history = useHistory();
  const [formData, setFormData] = useState({
    quantity: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handlePortfolioCreate(params.id, formData);
    history.push("/portfolio");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <Layout
        currentUser={props.currentUser}
        handleLogout={props.handleLogout}
      />
      <h1>How much {props.coin} do you own?</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Add to portfolio</label>
          <input
            onChange={handleChange}
            autoComplete="off"
            type="number"
            name="quantity"
            placeholder="How much do you own?"
            value={formData.quantity}
            className="search-field"
          ></input>
        </div>
        <div className="calculate-btn">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
