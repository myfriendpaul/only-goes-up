import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import "./App.css";
import Login from "./screens/Login";
import Register from "./screens/Register";
import MainContainer from "./containers/MainContainer";
import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from "./services/auth";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
    history.push("/");
  };

  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <Login handleLogin={handleLogin} />
        </Route>
        <Route path="/register">
          <Register handleRegister={handleRegister} />
        </Route>
        {/* <Route path="/search">
            <Search />
          </Route> */}
        <Route path="/">
          <MainContainer
            handleLogout={handleLogout}
            currentUser={currentUser}
          />
        </Route>
      </Switch>
      {/* </Layout> */}
    </div>
  );
}

export default App;
