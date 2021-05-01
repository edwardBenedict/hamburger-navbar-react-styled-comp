import styled from "styled-components";
import Navbar from "./Navbar";

function App() {
  return (
    <Container className="App">
      <Navbar />
    </Container>
  );
}

const Container = styled.div`
  background: #00adb5;
  height: 100vh;
`;

export default App;
