import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./Page/Login";
import Register from "./Page/Register";
import ForgotPassword from "./Page/ForgotPassword";
import ChangePassword from "./Page/ChangePassword";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login" render={(props) => <Login {...props} />} />
          <Route
            exact
            path="/register"
            render={(props) => <Register {...props} />}
          />
          <Route
            exact
            path="/forgot-password"
            render={(props) => <ForgotPassword {...props} />}
          />
          <Route
            exact
            path="/change-password"
            render={(props) => <ChangePassword {...props} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
