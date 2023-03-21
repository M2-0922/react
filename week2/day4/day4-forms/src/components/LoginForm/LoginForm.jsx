import React, { useState } from 'react'
import styled from "styled-components"

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const Input = styled.input`
    display: block;
    width: 100%;
`;

const Label = styled.label`
    color: white;
`;

const LoginForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleFirstName = (event) => {
    const { value } = event.target;
    setFirstName(value);
  }

  const handleLastName = (event) => {
    const { value } = event.target;
    setLastName(value);
  }

  return (
    <Form>
        <Label >First Name</Label>
        <Input 
            type='text' 
            name="firstName" 
            onChange={handleFirstName}
            value={firstName}
            // onChange={(event) => handleFirstName(event)}
        ></Input>
        <Label> Last Name</Label>
        <Input 
            type='text' 
            name='lastName' 
            onChange={handleLastName}
            value={lastName}
        ></Input>
    </Form>
  )
}

export default LoginForm