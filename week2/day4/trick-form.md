Form.js
```js
import React from "react"

export default function Form() {
    const [firstName, setFirstName] = React.useState("")
    const [lastName, setLastName] = React.useState("")
    
    function handleFirstNameChange(event) {
        setFirstName(event.target.value)
    }
    
    function handleLastNameChange(event) {
        setLastName(event.target.value)
    }
    
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleFirstNameChange}
               
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleLastNameChange}
                
            />
        </form>
    )
}

..

function handleChange(event) {
    console.log(event.target.value)
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [event.target.name]: event.target.value
        }
    })
}

const [formData, setFormData] = React.useState(
        {firstName: "", lastName: "", email: "", comments: ""}
)

name="firstName"
name="lastName"

..

<textarea 
    value={formData.comments}
    placeholder="Comments"
    onChange={handleChange}
    name="comments"
/>

...

{
    firstName: "", 
    lastName: "", 
    email: "", 
    comments: "", 
    isFriendly: true
}

<input 
    type="checkbox" 
    id="isFriendly" 
    checked={formData.isFriendly}
/>
<label htmlFor="isFriendly">Are you friendly?</label>
<br />

function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }
    })
}

...

<fieldset>
    <legend>Current employment status</legend>
    
    <input 
        type="radio"
        id="unemployed"
        name="employment"
        value="unemployed"
        checked={formData.employment === "unemployed"}
        onChange={handleChange}
    />
    <label htmlFor="unemployed">Unemployed</label>
    <br />
    
    <input 
        type="radio"
        id="part-time"
        name="employment"
        value="part-time"
        checked={formData.employment === "part-time"}
        onChange={handleChange}
    />
    <label htmlFor="part-time">Part-time</label>
    <br />
    
    <input 
        type="radio"
        id="full-time"
        name="employment"
        value="full-time"
        checked={formData.employment === "full-time"}
        onChange={handleChange}
    />
    <label htmlFor="full-time">Full-time</label>
    <br />
    
</fieldset>

{
    firstName: "", 
    lastName: "", 
    email: "", 
    comments: "", 
    isFriendly: true,
    employment: ""
}

...

<label htmlFor="favColor">What is your favorite color?</label>
<br />
<select 
    id="favColor"
    value={formData.favColor}
    onChange={handleChange}
    name="favColor"
>
    <option value="">-- Choose --</option>
    <option value="red">Red</option>
    <option value="orange">Orange</option>
    <option value="yellow">Yellow</option>
    <option value="green">Green</option>
    <option value="blue">Blue</option>
    <option value="indigo">Indigo</option>
    <option value="violet">Violet</option>
</select>

{
    firstName: "", 
    lastName: "", 
    email: "", 
    comments: "", 
    isFriendly: true,
    employment: "",
    favColor: ""
}

```