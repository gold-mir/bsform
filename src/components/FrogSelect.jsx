import styled from 'styled-components';
import { Fragment } from 'react'
import { useState, useEffect } from 'react';

let Mask = styled.div`
    background-color: rgba(0,0,0,0.4);
    position:absolute;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

let Modal = styled.div`
    /* width: 600px; */
    /* height: 500px; */
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    row-gap: 10px;
    border: 1px solid white;
    border-radius: 20px;
`

let FrogPictureContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    width: 500px;
    justify-content: center;
    align-items: center;
`

let FrogPicture = styled.img`
    height: 230px;
    width: 230px;
    border: 2px solid ${props => props.selected? "blue" : "black"};
`

let SubmitButton = styled.button`
    font-size: 20px;
`

let FrogSelectElement = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    border-radius: 5;
    padding: 3px;
`

function FrogSelect() {
    let [open, setOpen] = useState(false)
    let [frogURLs, setFrogURLs] = useState([])
    let [selected, setSelected] = useState(-1)

    let onMaskClick = (e) => {
        if(e.target !== e.currentTarget) {
            return;
        }
        setOpen(false)
    }

    let onSubmitClick = () => {
        setOpen(false);
    }

    useEffect(() => {
        const fetchFrogs = async () => {

            const fetchSpecificFrog = async (endpoint) => {
                let frog = await (await fetch(`https://frogs.media/api${endpoint}`)).json()
                return frog;
            }
            let frogList = await (await fetch("https://frogs.media/api/list")).json()
            let frogEndpoints = frogList.sort(() => 0.5 - Math.random()).slice(0, 4)
            let frogs = []
            
            for(let endpoint of frogEndpoints) {
                let frog = await fetchSpecificFrog(endpoint)
                frogs.push(frog.url)
            }

            setFrogURLs(frogs)
        }

        fetchFrogs()
    
    }, [])

    return (
        <Fragment>
            {!open? null : <Mask onClick={onMaskClick}>
                <Modal>
                    <h2>Select The Best Frog</h2>
                    <FrogPictureContainer>
                        {frogURLs.map((url, index) => {
                            return <FrogPicture selected={selected === index} key={index} src={url} onClick={() => setSelected(index)}/>
                        })}
                    </FrogPictureContainer>
                    <SubmitButton onClick={onSubmitClick}>Confirm</SubmitButton>
                </Modal>
            </Mask>}

            <FrogSelectElement onClick={() => setOpen(true)}>
                Prove You're Human
                {selected === -1? null : <FrogPicture src={frogURLs[selected]} />}
            </FrogSelectElement>
        </Fragment>
    )
}

export default FrogSelect