import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../context/auth";

export function ProtectedRoute({ component: Component, ...rest }) {
  const { authToken } = useAuth();

  return (
    <Route
      {...rest}
      render={props =>
        authToken ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}
