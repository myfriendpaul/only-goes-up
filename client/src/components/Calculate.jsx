import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Layout from "../layouts/Layout";
import { getOneUser } from "../services/currencies";

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
      <div>
        <h1>How much {props.currencies[params.id - 1].name} do you own?</h1>
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
    </div>
  );
}
