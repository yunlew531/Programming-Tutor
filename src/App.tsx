import { useRoutes } from 'react-router-dom';
import routes from './routes';
import { ThemeProvider } from '@emotion/react';
import Header from 'src/layout/Header.tsx';
import theme from 'src/assets/styleSheets/theme.ts';
import Footer from 'src/layout/Footer.tsx';
import ScrollToTop from './components/ScrollToTop';


function App() {
  const element = useRoutes(routes)

  return (
    <>
      <ThemeProvider theme={theme}>
        <ScrollToTop />
        <Header />
        {element}
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
