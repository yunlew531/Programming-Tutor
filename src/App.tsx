import { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import { ThemeProvider } from '@emotion/react';
import Header from 'src/layout/Header.tsx';
import theme from 'src/assets/styleSheets/theme.ts';
import Footer from 'src/layout/Footer.tsx';
import LoginModal from 'src/components/LoginModal';
import ScrollToTop from './components/ScrollToTop';


function App() {
  const element = useRoutes(routes)
  const [isLoginModalShow, setIsLoginModalShow] = useState(false);

  const hideLoginModal = () => setIsLoginModalShow(false);
  const showLoginModal = () => setIsLoginModalShow(true);

  return (
    <>
      <ThemeProvider theme={theme}>
        <ScrollToTop />
        {isLoginModalShow && <LoginModal hideModal={hideLoginModal} />}
        <Header showLoginModal={showLoginModal}  />
        {element}
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
