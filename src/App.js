import { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Users from "./components/Users";
import Todos from "./components/Todos";

import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <Router>
        <div>
          <ul className="menu">
            <li>
              <Link to="/">Homepage</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/todos">Todos</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/users">
              <Users users={this.state.users} />
            </Route>
            <Route path="/todos">
              <Todos />
              <h1>Todos will be here</h1>
            </Route>
            <Route path="/">
              <h1>Welcome</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
