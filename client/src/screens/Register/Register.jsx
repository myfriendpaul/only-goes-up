import { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";

export default function Register(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
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
    <div className="register">
      <div className="form-container">
        <form
          className="register-form"
          onSubmit={(e) => {
            e.preventDefault();
            props.handleRegister(formData);
          }}
        >
          <h3 className="form-name1">Register</h3>
          <label className="form-label1">
            Username:
            <br />
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="sign-in-input1"
            // size="16"
          />
          <br />
          <label className="form-label1">
            Email:
            <br />
          </label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="sign-in-input1"
            // size="16"
          />
          <br />
          <label className="form-label1">
            Password:
            <br />
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="sign-in-input1"
            // size="16"
          />
          <br />
          <p>
            Already a member?
            <Link to="/login">Login!</Link>
          </p>
          <br />
          <button>Submit</button>
        </form>
      </div>
      <div className="img-container"></div>
    </div>
  );
}
