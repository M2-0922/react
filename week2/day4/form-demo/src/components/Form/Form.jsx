import { useState } from 'react'
import styled from 'styled-components';

export const InputForm = styled.form`
display: flex;
flex-direction: column;
gap: 12px;
`;

export const Input = styled.input`
display: block;
width: 100%;
`;

export const Label = styled.label`
color: white;
`

export const FieldSet = styled.fieldset`
    display: grid;
    grid-template: 24px 24px 24px /1fr 1fr 1fr;
`

const Form = () => {

    const [formInputs, setformInputs] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        description: "",
        isAccept: false,
        employment: "",
        favColor: ""
    })


    function handleInput(event) {
        const {value, name} = event.target;

        setformInputs(prevForm => {
            return {
                ...prevForm,
                [name]: value === "checkbox" ? checked : value
            }
        })
    }

  return (
    <InputForm action="#" method="GET">
        <Label htmlFor="firstName">First Name</Label>
        <Input 
            type="text" 
            name="firstName" 
            id="firstName"
            onChange={handleInput} //onChange={(e) => handleInput(e)}
            value={formInputs.firstName}
        ></Input>
        <Label htmlFor="lastName">Last Name</Label>
        <Input 
            type="text" 
            name="lastName" 
            id="lastName"
            onChange={handleInput}
            value={formInputs.lastName}
        ></Input>
        <Label htmlFor="email">Email</Label>
        <Input 
            type="text" 
            name="email" 
            id="email"
            onChange={handleInput}
            value={formInputs.email}
        ></Input>
        <Label htmlFor="password">Password</Label>
        <Input 
            type="text" 
            name="password" 
            id="password"
            onChange={handleInput}
            value={formInputs.password}
        ></Input>
        <Label htmlFor="description">Description</Label>
        <textarea
            name="description"
            placeholder="write a description here"
            value={formInputs.description}
            onChange={handleInput}
        ></textarea>

        <Input 
        type="checkbox"
        id="isAccept"
        checked={formInputs.isAccept}
        onChange={handleInput}
        ></Input>

        <Label htmlFor="isAccept">We will get</Label>
        <FieldSet>
            <legend>Current Employee status</legend>
            <div>
                <Input 
                    type="radio"
                    name="employment"
                    id="unemployed"
                    value="unemployed"
                    checked={formInputs.employment === "unemployed"}
                    onChange={handleInput}
                />
                <Label>Unemployed</Label>
            </div>
            <div>
                <Input 
                    type="radio"
                    name="employment"
                    id="part-time"
                    value="part-time"
                    checked={formInputs.employment === "part-time"}
                    onChange={handleInput}
                />
                <Label>Part-time</Label>
            </div>
            <div>
                <Input 
                    type="radio"
                    name="employment"
                    id="full-time"
                    value="full-time"
                    checked={formInputs.employment === "full-time"}
                    onChange={handleInput}
                />
                <Label>Full-time</Label>
            </div>
        </FieldSet>

        <select
            id="favColor"
            name="favColor"
            value={formInputs.favColor}
            onChange={handleInput}
        >
            <option value="" key="empty">--- Chose ---</option>
            <option value="blue" key="blue">Blue</option>
            <option value="green" key="green">Green</option>
            <option value="yellow" key="yellow">Yellow</option>

        </select>
        <button>Submit</button>
    </InputForm>
  )
}

export default Form;