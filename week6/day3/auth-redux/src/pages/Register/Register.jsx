import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../actions";
import { useNavigate } from "react-router-dom";

const RegisterSection = styled.div`
  padding: 1rem 2rem;
`;

const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  gap: 14px;

  max-width: 420px;
  margin: 0 auto;
`;

const FormControl = styled.div`
  display: flex;
  flex-direction: column;

  label {
    text-align: start;
    margin-bottom: 8px;
  }

  input {
    height: 32px;
    outline: none;
    padding: 0 12px;
    font-size: 14px;
  }

  button {
    height: 32px;
    margin-top: 32px;
  }
`;

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    useEffect(() => {
        if(isLoggedIn){
            navigate("/dashboard");
        }
    }, [isLoggedIn])

    const [userData, setUserData] = useState({
        name: "",
        email:"",
        gender:"",
        status:""
    })

    const handleChange = (ev) => {
        const { name, value } = ev.target;

        // console.log(name, value);
        setUserData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleRegister = (ev) => {
        ev.preventDefault();
        // console.log(userData);
        dispatch(createUser(userData));
    }
  return (
    <RegisterSection>
      <RegisterForm onSubmit={handleRegister}>
        <h1>Register</h1>
        <FormControl>
          <label htmlFor="name">Full Name</label>
          <input onChange={handleChange} type="text" name="name" id="name" />
        </FormControl>
        <FormControl>
          <label htmlFor="email">Email</label>
          <input onChange={handleChange} type="text" name="email" id="email" />
        </FormControl>
        <FormControl>
          <label htmlFor="gender">Gender</label>
          <input onChange={handleChange} type="text" name="gender" id="gender" />
        </FormControl>
        <FormControl>
          <label htmlFor="status">Status</label>
          <input onChange={handleChange} type="text" name="status" id="status" />
        </FormControl>
        <FormControl>
          <button>Register</button>
        </FormControl>
      </RegisterForm>
    </RegisterSection>
  );
};

export default Register;
