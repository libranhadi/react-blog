// import logo from "../../../assets/img/logo/logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "../Dashboard";
import Login from "../Login";
import Registrasi from "../Registrasi";
import { createStore } from "redux";
import { rootReducer } from "../../../config/redux/reducer";
import { Provider } from "react-redux";

const storeRedux = createStore(rootReducer);
function App() {
  return (
    <Provider store={storeRedux}>
      <Router>
        <div className="root-app">
          <Switch>
            <Route path="/" exact component={Dashboard} />

            <Route path="/login" component={Login} />
            <Route path="/registrasi" component={Registrasi} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
