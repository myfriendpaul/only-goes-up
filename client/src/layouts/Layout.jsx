import { Link, Switch } from "react-router-dom";

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
          <div>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </div>
        )}
        <Link to="/">Home</Link>
        <hr />
        {props.currentUser && (
          <div>
            <Link to="/search">Search</Link>
            <Link to="/portfolio">Portfolio</Link>
          </div>
        )}
      </header>
      {props.children}
    </div>
  );
}
