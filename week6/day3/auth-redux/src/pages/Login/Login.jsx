import React from "react";
import { login } from "../../slices/authSlice";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const LoginSection = styled.div`
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    button{
        padding: 6px 12px;
    }
`;

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(login());
    navigate("/dashboard")
  };
  return (
    <LoginSection>
      <button onClick={handleLogin}>Login</button>
    </LoginSection>
  );
};

export default Login;
