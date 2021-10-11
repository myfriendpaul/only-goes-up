import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="sign-up">
      <div className="img-container2"></div>
      <div className="form-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            props.handleLogin(formData);
          }}
        >
          <h3 className="form-name">Login</h3>
          <label className="form-label">
            Username:
            <br />
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="sign-in-input"
          />
          <br />
          <label className="form-label">
            Password:
            <br />
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="sign-in-input"
          />
          {/* <br /> */}
          <div className="">
            <p>
              Not a member?
              <Link to="/register"> Join today!</Link>
            </p>
            <button>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
