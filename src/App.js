import CardsContainer from "./Components/CardsContainer";
import styled from "styled-components";

const AppWrapper = styled.section`
  display: grid;
  justify-content: center;
  padding-inline: 1rem;
  padding-block: 3rem;
  min-height: 100vh;
  background: ${({ theme }) => theme.color.back};
  @media (min-width: 768px) {
    place-content: center;
  }
`;
function App() {
  return (
    <AppWrapper className="App">
      <CardsContainer />
    </AppWrapper>
  );
}

export default App;
