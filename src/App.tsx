import { Outlet } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import dark from './styles/themes/dark'
import light from './styles/themes/light'
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header/index'
import { MainContainer } from './components/MainContainer/index'
import usePersistState from './Utils/usePersistState'

function App() {
  const [theme, setTheme] = usePersistState('theme', dark);
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainContainer>
        <Header toggleTheme={toggleTheme}/>
        <Outlet />
      </MainContainer>
    </ThemeProvider>
  )
}

export default App