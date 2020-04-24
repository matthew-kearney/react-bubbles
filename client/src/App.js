import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import BubblePage from './components/BubblePage';
import Login from "./components/Login";
import "./styles.scss";
import './app.scss';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Login} />
      </div>
      <PrivateRoute path="/bubble-page" component={BubblePage} />
    </Router>
  );
}

export default App;
