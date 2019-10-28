import React, { useState } from 'react';
import styled from 'styled-components';
import { useAuth } from "../context/auth";
import { Redirect } from "react-router-dom";
import { authenticate } from "./LoginHeadless"

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 500px;
  margin: 0px auto;
`

const LoginButton = styled.a`
  cursor: pointer;
  width: 220px;
  height: 42px;
  border-radius: 3px;
  box-shadow: 0px 3px 20px 0 rgba(29, 56, 93, 0.26);
  background-color: #3971c1;

  text-align: center;
  vertical-align: middle;
  line-height: 42px;

  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
`

const InputField = styled.input`
  width: 100%;

  height: 40px;
  border-radius: 3px;
  border: solid 1px #3971c1;
  background-color: #ffffff;
  padding: 10px;

  text-align: left;
  font-size: 14px;
  color: #292929;

  margin-bottom: 18px;

  &:last-child {
    margin-bottom: 0;
  }
`

export function Login() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthToken } = useAuth();

  const login = async () => {
    return await authenticate(
      email,
      password,
      (result) => {
        setAuthToken(result.access_token);
        setLoggedIn(true);
      },
      () => {
        setLoggedIn(false)
      }
    )
  }

  if (isLoggedIn) {
    return (<Redirect to="/" />);
  }

  return (
    <Form>
      <InputField
        id="email"
        type="text"
        value={email}
        onChange={ (e) => setEmail(e.target.value) }
      />
      <InputField
        id="password"
        type="password"
        value={password}
        onChange={ (e) => setPassword(e.target.value) }
      />
      <LoginButton onClick={() => login() }>Sign In</LoginButton>
    </Form>
  );
}
