import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
`

const Error = styled.span`
    font-style: italic;
    color: red;
    font-size: 12px;
`

function testString(str) {
    return "error"
}

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
                <label htmlFor="genderBox">Gender</label>
                <input id="genderBox" type="text" value={text} onChange={(e) => setText(e.target.value)}/>
                {error? <Error>{error}</Error> : null}
                <button type="submit">Submit</button>
            </Container>
        </form>
    )
}

export default TextInput;