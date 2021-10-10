import { Link } from "react-router-dom";
import "./Layout.css";

export default function Layout(props) {
  return (
    <div className="header-container">
      <div>
        <Link to="/">
          <img className="logo-img" src="https://imgur.com/ZIsfXPl.png" />
        </Link>
      </div>
      <div className="nav-links-container">
        <div>
          {!props.currentUser && (
            <Link className="nav-links" to="/login">
              Login
            </Link>
          )}
        </div>
        <Link className="nav-links" to="/">
          Home
        </Link>
        {/* {props.currentUser && ( */}
        <div>
          {props.currentUser && (
            <Link className="nav-links" to="/search">
              Search
            </Link>
          )}
        </div>
        <div>
          {props.currentUser && (
            <Link className="nav-links" to="/portfolio">
              Portfolio
            </Link>
          )}
        </div>
        <div>
          {props.currentUser && (
            <Link to="/" className="nav-links" onClick={props.handleLogout}>
              Logout
            </Link>
          )}
        </div>
      </div>
      {/* )} */}
      {props.children}
    </div>
  );
}
