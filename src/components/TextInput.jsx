import { useState } from 'react';
import styled from 'styled-components';
import { testString } from './RegexRequirements'

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
    const [text, setText] = useState();
    const [error, setError] = useState()

    let onSubmit = (e) => {
        e.preventDefault()
        setError(testString(text))
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
                    <input id="genderBox" type="text" value={text} onChange={(e) => setText(e.target.value)}/>
                    {error? <Error>{error}</Error> : null}
                </FormSubset>

                <button type="submit">Submit</button>
            </Container>
        </form>
    )
}

export default TextInput;