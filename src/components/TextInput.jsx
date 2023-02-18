import { useState } from 'react';
import styled from 'styled-components';
import { testString } from './RegexRequirements'
import FrogSelect from './FrogSelect'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    row-gap: 10px;
`

const FormSubset = styled.div`
    display: flex;
    flex-direction: column;
`

const Error = styled.span`
    font-style: italic;
    color: red;
    font-size: 12px;
`

function TextInput() {
    const [state, setState] = useState({
        gender: {
            value: '',
            error: ''
        }
    });

    const setValue = (propName, value) => {
        setState({...state, [propName]: {...state[propName], value: value}})
    }

    const setError = (propName, error) => {
        setState({...state, [propName]: {...state[propName], error: error}})
    }

    let onSubmit = (e) => {
        e.preventDefault()
        setError("gender", testString(state.gender.value))
    }

    return (
        <form onSubmit={onSubmit}>
            <h2>Stupid Signup Form</h2>
            <Container>
                <FormSubset>
                    <label htmlFor="firstName">First Name:</label>
                    <input id="firstName" type="text" />
                </FormSubset>

                <FormSubset>
                    <label htmlFor="lastName">Last Name:</label>
                    <input id="lastName" type="text" />
                </FormSubset>

                <FormSubset>
                    <label>Date of Birth:</label>
                    <input type="date" />
                </FormSubset>
                
                <FormSubset>
                    <label htmlFor="genderBox">Gender:</label>
                    <input id="genderBox" type="text" value={state.gender.value} onChange={(e) => setValue("gender", e.target.value)}/>
                    {state.gender?.error? <Error>{state.gender.error}</Error> : null}
                </FormSubset>
                <FrogSelect></FrogSelect>

                <button type="submit">Submit</button>
            </Container>
        </form>
    )
}

export default TextInput;