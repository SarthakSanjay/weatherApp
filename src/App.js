import styled from 'styled-components';
import './App.css';
import Home from './components/Home';
const Container = styled.div`
height: 100vh;
width:100vw;
background-color: black;
color: white;
display: flex;
justify-content: center;
align-items: center;
`
function App() {
  return (
    <div className="App">
     <Container>
     <Home />
     </Container>
    </div>
  );
}

export default App;
