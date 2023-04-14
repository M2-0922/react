// Lab question 4
// Create a compound component that renders a form with multiple input fields.
// The component should manage the state of the inputs and provide a way for the parent component to submit the form.

import React, { useState, createContext } from 'react';
import { useContext } from 'react';

const InputContext = createContext();

function Toggle(props) {
    const [submit, setSubmit] = useState(false);

    function toggle() {
        setSubmit(!submit)
    }

    return(
        <InputContext.Provider value={{ submit, toggle}}>
            {props.children}
        </InputContext.Provider>
    )
}

function ToggleOn(props) {
    const { submit } = useContext(InputContext)
    return submit ? props.children : null
}

function ToggleOff(props) {
    const { submit } = useContext(InputContext)
    return submit ? null : props.children
}

function ToggleButton(props) {
    const { submit, toggle } = useContext(InputContext);
    return <button onClick={toggle}>{submit ? 'Submit' : 'Submitted'}</button>
}

const CompoundComponents = () => {
  return (
    <Toggle>
        <ToggleOn>
            <input value={'please input...'} />
        </ToggleOn>
        <ToggleOff>
            <input value={"Submitted!"}/>
        </ToggleOff>
        <ToggleButton />
    </Toggle>
  )
}

export default CompoundComponents