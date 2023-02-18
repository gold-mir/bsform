import styled from 'styled-components';

import TextInput from './components/TextInput';

let AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
`

function App() {

  return (
    <AppContainer>
      <TextInput/>
    </AppContainer>
  );
}

export default App;
