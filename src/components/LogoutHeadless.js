import React from 'react';
import { Redirect } from "react-router-dom";

export function LogoutHeadless() {
  localStorage.removeItem('token');

  return (
    <Redirect to="/login" />
  );
}
