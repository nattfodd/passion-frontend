import React, { useState } from 'react';
import './App.css';
import { Verticals } from './components/Verticals'
import { Login } from './components/Login'
import { LogoutHeadless as Logout } from './components/LogoutHeadless'
import { ProtectedRoute } from './components/ProtectedRoute'
import styled from 'styled-components';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthContext } from "./context/auth";

const Body = styled.div`
  margin: 20px;
`

function App() {
  const [authToken, setAuthToken] = useState(localStorage.token);

  const setToken = (token) => {
    localStorage.setItem("token", token);
    setAuthToken(token);
  }

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken: setToken }}>
      <Router>
        <Body>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <ProtectedRoute exact path="/" component={Verticals} />
          </Switch>
        </Body>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
