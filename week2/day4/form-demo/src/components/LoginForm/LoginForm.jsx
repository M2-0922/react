import { useState } from 'react'
import styled from 'styled-components';

const LoginForm = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

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
    `

    const handleFirstName = (e) => {
        const { value } = e.target;
        setFirstName(value);
    }

    const handleLastName = (e) => {
        const { value } = e.target;
        setLastName(value);
    }

  return (
    <Form>
        <Label htmlFor="firstName">First Name</Label>
        <Input 
            type="text" 
            name="firstName" 
            id="firstName"
            onChange={handleFirstName} //onChange={(e) => handleFirstName(e)}
            value={firstName}
        ></Input>
        <Label htmlFor="lastName">Last Name</Label>
        <Input 
            type="text" 
            name="lastName" 
            id="lastName"
            onChange={handleLastName}
            value={lastName}
        ></Input>
    </Form>
  )
}

export default LoginForm;