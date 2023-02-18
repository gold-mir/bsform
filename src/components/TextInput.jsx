import { useState } from 'react';
import styled from 'styled-components';
import { testString } from './RegexRequirements'
import FrogSelect from './FrogSelect'
import { getRandomName } from './Username';

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
        },
        zip: {
            value: ''
        },
        username: {
            error: ''
        },
        email: {
            selected: ''
        }
    });

    const setValue = (propName, value) => {
        setState({...state, [propName]: {...state[propName], value: value}})
    }

    const setError = (propName, error) => {
        setState({...state, [propName]: {...state[propName], error: error}})
    }

    const onSelectYes = () => {
        setState({...state, email: {selected: "Yes"}});
    }

    const onSelectNo = async () => {
        setState({...state, email: {selected: "No"}});
        await new Promise(resolve => setTimeout(resolve, 3000 + Math.floor(Math.random()*7000)));
        setState({...state, email: {selected: "Yes"}});
    }

    let onSubmit = async (e) => {
        e.preventDefault()
        setState({...state, email: {selected: "Yes"}});
        await new Promise(resolve => setTimeout(resolve, 500));
        setState({...state,
                gender: {...state["gender"], error: testString(state.gender.value)},
                username: {...state["username"], error: `Your username is taken. Maybe try ${getRandomName()}?`}
            });
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
                    <input type="date" defaultValue="2063-04-05"/>
                </FormSubset>

                <FormSubset>
                    <label htmlFor="username">Username:</label>
                    <input id="username" type="text"></input>
                    {state.username?.error ? <Error>{state.username.error}</Error> : null}
                </FormSubset>
                
                <FormSubset>
                    <label htmlFor="zipCode">Postal code:</label>
                    <input id="zipCode" type="text" value={state.zip.value} onChange={(e) => setValue("zip", e.target.value.replace(/\D/g,'').substring(0, 5))}></input>
                </FormSubset>

                <FormSubset>
                    <label htmlFor="genderBox">Gender:</label>
                    <input id="genderBox" type="text" value={state.gender.value} onChange={(e) => setValue("gender", e.target.value)}/>
                    {state.gender?.error? <Error>{state.gender.error}</Error> : null}
                </FormSubset>
                <FrogSelect></FrogSelect>

                <FormSubset>
                    <legend>I consent to receiving your dumb promotional bullshit until I finally remember to unsubscribe</legend>
                    <div style={{fontSize:"40px"}}>
                        <input type="radio" value="emailYes" checked={state.email.selected === "Yes"} onClick={onSelectYes}/> Yes
                    </div>
                    <div style={{fontSize:"8px"}}>
                        <input type="radio" value="emailNo" checked={state.email.selected === "No"} onClick={onSelectNo}/> No (and I hate you)
                    </div>
                </FormSubset>

                <button type="submit">Submit</button>
            </Container>
        </form>
    )
}

export default TextInput;
