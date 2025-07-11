import styled from 'styled-components'
import Header from './components/Header'
import Search from './components/Search'
import LastestReleases from './components/LastestReleases'

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(90deg, #002f52 35%, #326589);
`
function App() {
  return (
    <AppContainer>
        <Header/>
        <Search/>
        <LastestReleases/>
    </AppContainer>
  );
}

export default App;
