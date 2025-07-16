import styled from 'styled-components';
import Search from '../components/Search';
import LastestReleases from '../components/LastestReleases';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(90deg, #002f52 35%, #326589);
`;
function Home() {
  return (
    <AppContainer>
      <Search />
      <LastestReleases />
    </AppContainer>
  );
}

export default Home;
