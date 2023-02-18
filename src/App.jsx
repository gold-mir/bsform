import styled from 'styled-components';

import TextInput from './components/TextInput';

let AppContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
`

function App() {

  return (
    <AppContainer>
      <TextInput/>
    </AppContainer>
  );
}

export default App;
