import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { Content } from './components/Content';
import { GlobalStyles, lightTheme, darkTheme } from './styles/globalStyles';
import { Toggle } from './components/Toggle';
import { useDarkMode } from './styles/darkMode';


const Container = styled.div`
  max-width: 50%;
  margin: 8rem auto 0;
`;

function App() {

  const [ theme, toggleTheme ] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <Container>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <Content />
      </Container>
    </ThemeProvider>
  );
}

export default App;
