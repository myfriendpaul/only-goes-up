import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Layout from "../layouts/Layout";
import { getOneUser } from "../services/currencies";
import "./Calculate.css";

export default function Calculate(props) {
  const params = useParams();
  const history = useHistory();
  const [userData, setUserData] = useState(null);
  const [formData, setFormData] = useState({
    quantity: "",
    name: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const userInfo = await getOneUser(formData.id);
      setUserData(userInfo);
    };
    fetchUserData();
  }, [params.id]);

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
      <div className="form-container2">
        <div className="form-container">
          <div className="coin-title">
            <h1>How much {props.currencies[params.id - 1].name} do you own?</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Add amouont to portfolio</label>
              <br />
              <input
                onChange={handleChange}
                autoComplete="off"
                type="number"
                name="quantity"
                // placeholder="Quantity"
                value={formData.quantity}
                className="sign-in-input2"
              ></input>
            </div>
            <div className="calculate-btn">
              <br />
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
