import logo from "../../../assets/img/logo/logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "../Dashboard";
import Login from "../Login";
import Registrasi from "../Registrasi";
function App() {
  return (
    <Router>
      <div className="root-app">
        <Switch>
          <Route path="/" exact component={Dashboard} />

          <Route path="/login" component={Login} />
          <Route path="/registrasi" component={Registrasi} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
