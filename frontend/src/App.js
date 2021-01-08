import GlobalStyle from './styles/GlobalStyle'
import { Container } from './styles'

import Orders from './components/Orders'
import logo from './images/logo.svg';

function App() {
  return (
    <>
      <GlobalStyle/>
      <Container>
        <img src={logo} alt="logo"/>
        
        <Orders/>
      </Container>
      
    </>
  );
}

export default App;
