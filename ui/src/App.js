import "./App.css";
import {BrowserRouter as Router} from "react-router-dom";
import {NavBar} from "./components/navbar/navbar";
import {AuthContext} from "./context/auth";
import {useAuth} from "./hooks/auth";
import {useRoutes} from "./routes";
import {Loader} from "./components/Loader/loader";

function App() {
  const {token, login, logout, userId, ready} = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

  if (!ready) {
    return <Loader />;
  }

  return (
    <AuthContext.Provider value={{token, login, logout, userId, isAuthenticated}}>
      <Router>
        { isAuthenticated && <NavBar /> }
        <div className="container">
          {routes}
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
