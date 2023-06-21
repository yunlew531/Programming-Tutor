import { useRoutes } from 'react-router-dom';
import routes from './routes';
import { ThemeProvider } from '@emotion/react';
import Header from './layout/Header.tsx';
import theme from 'src/assets/styleSheets/theme.ts';


function App() {
  const element = useRoutes(routes)

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        {element}
      </ThemeProvider>
    </>
  )
}

export default App
