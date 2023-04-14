// `Lab question 4`: 
// Create a compound component that renders a form with multiple input fields. 
// The component should manage the state of the inputs and provide a way for the parent component to submit the form.

import React, {useState} from "react";

function Form(props){
    const [forms, setForms] = useState({});

    const handleChange = (e) => {
        if (e.target.type !== 'checkbox'){
            setForms(prevValue => ({
                ...prevValue,
                [e.target.name]: e.target.value
            }))
        }else{
            setForms(prevValue => ({
                ...prevValue,
                [e.target.name]: e.target.checked
            }))
        }
    }

    const handleSubmit = (e) => {
        alert(`${forms.toString()} are submitted`)
        e.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <div onChange={handleChange}>{props.children}</div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

const Lab4 = () => {
    return (
        <Form>
            <div>
                <input type='text' name='text'/>
            </div>
            
            <div>
                <input type='checkbox' id='checkbox' name="checkbox"/>
                <label for='checkbox'>Checkbox</label>
            </div>
            
            <div>
                <select name="select">
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select>
            </div>
            
            <div>
                <input type='radio' id='radio1' name='radio' value='1' />
                <label for='radio1'>1</label>
                <input type='radio' id='radio2' name='radio' value='2' />
                <label for='radio2'>2</label>
                <input type='radio' id='radio3' name='radio' value='3' />
                <label for='radio3'>3</label>
            </div>
        </Form>
    )
};

export default Lab4;