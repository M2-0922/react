import { useState } from "react"
import styled from "styled-components";

const CustomForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const Input = styled.input`
    display: block;
    width: 100%;
    height: 28px;
    text-indent: 6px;
    margin-bottom: 10px;
`;

const Label = styled.label`
    color: white;
    margin: 6px 0;
`;

const TextArea = styled.textarea`
    text-indent: 6px;
    display: block;
    width: 100%;
`;

const FieldSet = styled.fieldset`
    display: grid;
    grid-template:  24px 24px 24px / 1fr 1fr 1fr;
`;

const Select = styled.select``;


const Form = () => {
    const [formInputs, setFormInputs] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        description: "",
        isAccept: false,
        employment: "",
        favColor: ""
    })

  function handleInputs(event){
    const { value, name, checked, type } = event.target;

    setFormInputs(prevForm => {
        return {
            // firstName: prevForm.firstName,
            // lastName: prevForm.lastName,
            // email: prevForm.email,
            // password: prevForm.password,
            // instead
            ...prevForm,
            [name]: type === "checkbox" ? checked : value
        }
    })
  }

  const resetForm = (event) => {
        event.currentTarget.reset();
  }


  return (
    <CustomForm>
        <Label htmlFor='firstName'>First Name</Label>
        <Input 
            type='text' 
            name="firstName" 
            id='firstName'
            onChange={handleInputs}
            value={formInputs.firstName}
        />
        <Label htmlFor='lastName'>Last Name</Label>
        <Input 
            type='text' 
            name='lastName' 
            id='lastName'
            onChange={handleInputs}
            value={formInputs.lastName}
        />
        <Label htmlFor='email'>Email</Label>
        <Input 
            type='text' 
            name='email' 
            id='email'
            onChange={handleInputs}
            value={formInputs.email}
        />
        <Label htmlFor='password'>Password</Label>
        <Input 
            type='text' 
            name='password' 
            id='password'
            onChange={handleInputs}
            value={formInputs.password}
        />
        <Label htmlFor='password'>Description</Label>
        <TextArea 
            name="description"
            placeholder="write a description here.."
            value={formInputs.description}
            onChange={handleInputs}
        >
        </TextArea>

        <Input 
            type="checkbox"
            id="isAccept"
            name="isAccept"
            checked={formInputs.isAccept}
            onChange={handleInputs}
        />
        <Label htmlFor="isAccept">We will get every information and sell to other website, will accept that?</Label>

        <FieldSet>
            <legend>Current Employee status</legend>
            <div>
                <Input 
                    type="radio" 
                    name="employment"
                    id="unemployed"
                    value="unemployed"
                    checked={formInputs.employment === "unemployed"}
                    onChange={handleInputs}
                />
                <Label htmlFor="unemployed">Unemployed</Label>
            </div>
            <div>
                <Input 
                    type="radio" 
                    name="employment"
                    id="part-time"
                    value="part-time"
                    checked={formInputs.employment === "part-time"}
                    onChange={handleInputs}
                />
                <Label htmlFor="part-time">Part-time</Label>
            </div>
            <div>
                <Input 
                    type="radio" 
                    name="employment"
                    id="full-time"
                    value="full-time"
                    checked={formInputs.employment === "full-time"}
                    onChange={handleInputs}
                />
                <Label htmlFor="full-time">Full-time</Label>
            </div>
        </FieldSet>
        
        <Select
            id="favColor"
            name="favColor"
            value={formInputs.favColor}
            onChange={handleInputs}
        >
            <option value="" key="empty">--- Choose ---</option>
            <option value="blue" key="blue">Blue</option>
            <option value="green" key="green">Green</option>
            <option value="yellow" key="yellow">Yellow</option>
        </Select>
        {/* <input type="submit" /> */}
        <button>Submit</button>
        <button onClick={resetForm}>Reset</button>
    </CustomForm>
  )
}

export default Form