import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Home from "./components/Home/home";

class App extends Component {
  render() {
    //---------------- Private route authentication (check if there is a token in the store)
    const PrivateRoute = ({ component: Component, ...rest }) => {
      return (
        <Route
          {...rest}
          render={props => {
            return this.props.token === true ? (
              <Component {...props} />
            ) : (
              <Redirect to="/" />
            );
          }}
        />
      );
    };

    return (
      <Router>
        <>
          <div className="App">
            <div className="Navbar" />
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
          <div className="Footer" />
        </>
      </Router>
    );
  }
}

export default App;
