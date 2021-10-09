import { Link } from "react-router-dom";
import "./Layout.css";

// const authenticatedOptions = (
//   <>
//     <div className="auth-menu">
//       <Link className="nav-links" to="/search">
//         Search
//       </Link>
//       <Link className="nav-links" to={`/users/${props.currentUser.id}`}>
//         Portfolio
//       </Link>
//     </div>
//   </>
// );

// const unauthenticatedOptions = (
//   <>
//     <div className="unauth-menu">
//       <Link className="nav-links" to="/register">
//         Register
//       </Link>
//       <br />
//       <Nav.Link className="nav-links" to="/login">
//         Sign In
//       </Nav.Link>
//     </div>
//   </>
// );

export default function Layout(props) {
  return (
    <div className="header-container">
      <header>
        <img className="logo-img" src="https://imgur.com/VtA7sMg.png" />
        {props.currentUser ? (
          <div>
            <p>{props.currentUser.name}</p>
            <Link to="/" className="nav-links" onClick={props.handleLogout}>
              Logout
            </Link>
          </div>
        ) : (
          <div className="register-link">
            <Link className="nav-links" to="/register">
              Register
            </Link>
            <Link className="nav-links" to="/login">
              Login
            </Link>
          </div>
        )}
        <Link className="nav-links" to="/">
          Home
        </Link>
        {props.currentUser && (
          <div>
            <Link className="nav-links" to="/search">
              Search
            </Link>
            <Link className="nav-links" to="/portfolio">
              Portfolio
            </Link>
          </div>
        )}
      </header>
      {props.children}
    </div>
  );
}
