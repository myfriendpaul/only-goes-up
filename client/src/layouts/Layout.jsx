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
        {props.currentUser && (
          <div>
            <Link to="/search">Search</Link>
            <Link to={`/users/${props.currentUser.id}`}>Portfolio</Link>
          </div>
        )}
      </header>
      {props.children}
    </div>
  );
}
