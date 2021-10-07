import { Link } from "react-router-dom";

export default function Layout(props) {
  return (
    <div>
      <header>
        <h1>Only Goes Up</h1>
        {props.currentUser ? (
          <div>
            <p>{props.currentUser.name}</p>
            <button onClick={props.handleLogout}>Logout</button>
          </div>
        ) : (
          <Link to="/register">Register</Link>
        )}
        <Link to="/">Home</Link>
        {/* <Link to="/login">Login</Link> */}
        <hr />
        {props.currentUser && (
          <div>
            <Link>Search</Link>
            <Link>Portfolio</Link>
          </div>
        )}
      </header>
      {props.children}
    </div>
  );
}
