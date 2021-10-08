import { useState } from "react";
import { useParams } from "react-router-dom";
export default function Calculate(props) {
  const params = useParams();
  const [formData, setFormData] = useState({
    quantity: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handlePortfolioCreate(params.id, formData);
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
