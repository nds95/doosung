import './App.css';
import styled from 'styled-components';

const Container = styled.div`
  height: 50px;
  padding: 10px 10px;
  color: blue;
`

function App() {
  return (
    <div className="App">
      <Container>nav</Container>
      <div>body</div>
      <div>bottom</div>
    </div>
  );
}

export default App;
