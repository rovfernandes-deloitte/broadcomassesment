// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Components/Login/Login";
import Login1 from "./Components/LogIn";
import { useHistory } from "react-router-dom";
import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import Protected from "./Components/ProtectedRoutes";
import Home from "./Components/Home";
import config from "./config";
import DashBoard from "./Components/DashBoard/DashBoard";
import { Counter } from "./feature/counter/Counter";
import Project from "./Components/Project/Project";
import Issues from "./Components/Issues/Issues";
const oktaAuth = new OktaAuth(config.oidc);
const App: React.FC = () => {
  const history = useHistory();

  const customAuthHandler = () => {
    history.push("/trackerLogin");
  };

  const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
    history.replace(toRelativeUrl(originalUri || "", window.location.origin));
  };

  return (
    <Security
      oktaAuth={oktaAuth}
      onAuthRequired={customAuthHandler}
      restoreOriginalUri={restoreOriginalUri}
    >
      <SecureRoute path="/protected" component={Protected} />
      <Route path="/" exact component={Login} />
      <Route path="/login" render={() => <Login1 config={config} />} />
      <Route path="/login/callback" exact component={DashBoard} />
      <Route path="/trackerLogin" exact component={Login} />
      <Route path="/dashboard" exact component={DashBoard} />
      <Route path="/createproject" exact component={Project} />
      <Route path="/createissues" exact component={Issues} />
      <Route path="/counter" exact component={Counter} />
    </Security>
  );
};

export default App;
