import "./Home.css";
import Layout from "../layouts/Layout";
export default function Home(props) {
  return (
    <div>
      <Layout
        currentUser={props.currentUser}
        handleLogout={props.handleLogout}
      />
      <div className="hero">
        <h1 className="hero-text">What's an exit strategy?</h1>
      </div>
    </div>
  );
}
